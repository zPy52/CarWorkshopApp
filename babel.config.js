module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      ["inline-import", { extensions: [".sql"] }],
      "react-native-reanimated/plugin",
    ], // CAUTION: react-native-reanimated/plugin has to be listed last.
  };
};
