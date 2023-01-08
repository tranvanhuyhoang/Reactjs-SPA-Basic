const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "mfe",
    projectName: "react-app",
    webpackConfigEnv,
    argv
  });

  return merge(defaultConfig, {
    // customizations can go here
  });
};