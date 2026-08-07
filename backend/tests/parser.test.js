const { parseHtml } = require("../utils/parser");

describe("parseHtml", () => {
  // Test 1: Happy path
  test("should correctly parse a valid HTML page", () => {
    const html = `
      <html>
        <head>
          <title>Test Website</title>
          <meta name="description" content="This is a test website">
        </head>
        <body>
          <h1>Welcome to Test Website</h1>
          <p>This is some useful website content.</p>

          <img src="image1.jpg" alt="Test image">
          <img src="image2.jpg" alt="Another image">

          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </body>
      </html>
    `;

    const result = parseHtml(html);

    expect(result.title).toBe("Test Website");
    expect(result.metaDescription).toBe("This is a test website");
    expect(result.h1Count).toBe(1);
    expect(result.totalImages).toBe(2);
    expect(result.imagesWithoutAlt).toBe(0);
    expect(result.totalLinks).toBe(2);
    expect(result.wordCount).toBeGreaterThan(0);
  });

  // Test 2: Missing SEO elements
  test("should handle missing title, meta description, H1 and alt attributes", () => {
    const html = `
      <html>
        <head></head>
        <body>
          <p>Some website content</p>

          <img src="image1.jpg">
          <img src="image2.jpg" alt="">

          <a href="/about">About</a>
        </body>
      </html>
    `;

    const result = parseHtml(html);

    expect(result.title).toBe("No title found");
    expect(result.metaDescription).toBe("No description found");
    expect(result.h1Count).toBe(0);
    expect(result.totalImages).toBe(2);
    expect(result.imagesWithoutAlt).toBe(2);
    expect(result.totalLinks).toBe(1);
  });

  // Test 3: Empty HTML
  test("should safely handle empty HTML", () => {
    const result = parseHtml("");

    expect(result.title).toBe("No title found");
    expect(result.metaDescription).toBe("No description found");
    expect(result.h1Count).toBe(0);
    expect(result.totalImages).toBe(0);
    expect(result.imagesWithoutAlt).toBe(0);
    expect(result.totalLinks).toBe(0);
    expect(result.wordCount).toBe(0);
  });
});