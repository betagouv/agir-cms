module.exports = (plugin) => {
  plugin.services.upload = require("./custom-upload.js");
  return plugin;
};
