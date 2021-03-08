module.exports = {
  layout: "topic",
  tags: "topic",
  eleventyComputed: {
    // All patterns that have a `topic` property equal to a topic's
    // `slug` belong to that topic's patterns.
    patterns: (data) =>
      data.collections.patternsByTitle.filter(
        (p) => p.data.topic === data.slug
      ),
  },
};
