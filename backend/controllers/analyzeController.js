const axios = require("axios");
const cheerio = require("cheerio");

const analyzeWebsite = async (req, res) => {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({
        error: "URL is required",
      });
    }

    try {
      new URL(url);
    } catch {
      return res.status(400).json({
        error: "Please enter a valid URL.",
      });
    }

    const startTime = Date.now();

    const response = await axios.get(url, {
      timeout: 5000,
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
      },
    });

    const responseTime = Date.now() - startTime;

    const $ = cheerio.load(response.data);

    const title = $("title").text().trim() || "No title found";

    const metaDescription =
      $('meta[name="description"]').attr("content") ||
      "No description found";

    const h1Count = $("h1").length;

    const totalImages = $("img").length;

    const imagesWithoutAlt = $("img").filter((i, el) => {
      const alt = $(el).attr("alt");
      return alt === undefined || alt.trim() === "";
    }).length;

    const totalLinks = $("a").length;

    const bodyText = $("body").text().trim();

    const wordCount = bodyText
      ? bodyText.split(/\s+/).length
      : 0;

    res.status(200).json({
      status: response.status,
      responseTime: `${responseTime} ms`,
      title,
      metaDescription,
      h1Count,
      totalImages,
      imagesWithoutAlt,
      totalLinks,
      wordCount,
    });

  } catch (error) {
    if (error.code === "ECONNABORTED") {
      return res.status(408).json({
        error: "Request timed out. The website took too long to respond.",
      });
    }

    if (error.response) {
      return res.status(error.response.status).json({
        error: `Website returned ${error.response.status}. It may block automated requests.`,
      });
    }

    res.status(500).json({
      error: "Unable to analyze the website.",
    });
  }
};

module.exports = { analyzeWebsite };