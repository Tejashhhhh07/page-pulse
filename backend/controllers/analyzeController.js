const axios = require("axios");
const { parseHtml } = require("../utils/parser");

const analyzeWebsite = async (req, res) => {
  try {
    const { url } = req.body;

    // Check if URL is provided
    if (!url) {
      return res.status(400).json({
        error: "URL is required",
      });
    }

    // Validate URL format
    try {
      new URL(url);
    } catch {
      return res.status(400).json({
        error: "Please enter a valid URL.",
      });
    }

    // Start measuring response time
    const startTime = Date.now();

    // Fetch website
    const response = await axios.get(url, {
      timeout: 5000,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
      },
    });

    const responseTime = Date.now() - startTime;

    // Parse HTML using parser utility
    const parsedData = parseHtml(response.data);

    // Return analysis report
    res.status(200).json({
      status: response.status,
      responseTime: `${responseTime} ms`,
      ...parsedData,
    });
  } catch (error) {
    // Request timeout
    if (error.code === "ECONNABORTED") {
      return res.status(408).json({
        error: "Request timed out. The website took too long to respond.",
      });
    }

    // Website returned an HTTP error
    if (error.response) {
      return res.status(error.response.status).json({
        error: `Website returned ${error.response.status}. It may block automated requests.`,
      });
    }

    // Other errors
    return res.status(500).json({
      error: "Unable to analyze the website.",
    });
  }
};

module.exports = { analyzeWebsite };