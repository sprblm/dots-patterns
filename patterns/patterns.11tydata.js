// This file configures data inserted into each pattern as it is displayed
// on the dots-website

module.exports = {
  layout: "pattern",
  tags: "pattern",
  eleventyComputed: {
    published: (data) => data.page.date.toLocaleDateString("en-us"),
    relatedPatterns: (data) => data.helpers.relatedPatterns(data),
  },
};
