// This file configures data inserted into each pattern as it is displayed
// on the dots-website

const fs = require("fs");

module.exports = {
  layout: "pattern",
  tags: "pattern",
  eleventyComputed: {
    published: (data) => data.page.date.toLocaleDateString("en-us"),

    // Compile related patterns by parsing the file contents directly
    // unfortunately, 11ty doesn't seem to make available the page content
    // at this stage of its data pipeline so we have to do a separate
    // read on the pattern pages here.
    relatedPatterns: (data) => {
      // this is the same regex pattern as used by the wikilinks markdownit
      // extension (taken from documentation on npm)
      const regex = /\[\[([\w\s/]+)(\|([\w\s/]+))?\]\]/g;
      const content = fs.readFileSync(data.page.inputPath, {
        encoding: "utf8",
        flag: "r",
      });
      try {
        return [...content.matchAll(regex)].map((m) => m[1]);
      } catch (err) {
        console.error(
          `Error extracting related patterns: malformed wikilink (${err})`
        );
        return [];
      }
    },
  },
};
