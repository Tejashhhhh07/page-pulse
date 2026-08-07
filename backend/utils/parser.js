const cheerio = require("cheerio");

const parseHtml = (html) => {
  const $ = cheerio.load(html);

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

  return {
    title,
    metaDescription,
    h1Count,
    totalImages,
    imagesWithoutAlt,
    totalLinks,
    wordCount,
  };
};

module.exports = { parseHtml };