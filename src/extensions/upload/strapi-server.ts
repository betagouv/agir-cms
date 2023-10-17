const getService = (name) => {
  return strapi.plugin("upload").service(name);
};

const axios = require("axios");
const imageSize = require("image-size");

module.exports = (plugin) => {
  plugin.services.upload = require("./custom-upload.js");
  return plugin;
};
