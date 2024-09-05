export default {
  hooks: {
    filters: {
      "no-primitive-tokens": (token) => {
        return token.filePath !== "tokens/primitive.tokens.json";
      },
    },
  },
  source: ["tokens/**.tokens.json"],
  platforms: {
    ts: {
      transformGroup: "js",
      buildPath: "dist/",
      files: [
        {
          destination: "tokens.js",
          format: "javascript/es6",
          filter: "no-primitive-tokens",
        },
      ],
    },
  },
};
