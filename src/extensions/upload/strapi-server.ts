const getService = (name) => {
  return strapi.plugin("upload").service(name);
};

const axios = require("axios");
const imageSize = require("image-size");

module.exports = (plugin) => {
  console.log("salut les gogols");
  //plugin.services["upload"] = upload;
  console.log(plugin.services.upload);
  plugin.services.upload = require("./custom-upload.js"); /*async function (
    fileData,
    { user }
  ) {
    const config = strapi.config.get("plugin.upload");
    const { isImage } = getService("image-manipulation");

    await getService("provider").checkFileSize(fileData);

    if (await isImage(fileData)) {
      await this.uploadImage(fileData);
    } else {
      await getService("provider").upload(fileData);
    }

    _.set(fileData, "provider", config.provider);

    const { width, height } = await setDimensionsFromRemoteImage(fileData.url);

    console.log(width, fileData);
    _.assign(fileData, {
      provider: config.provider,
      width,
      height,
    });

    // Persist file(s)
    return this.add(fileData, { user });
  };*/
  return plugin;
};

const setDimensionsFromRemoteImage = async (imageUrl) => {
  try {
    const response = await axios.get(imageUrl, { responseType: "arraybuffer" });

    const dimensions = imageSize(response.data);
    return dimensions;
  } catch (error) {
    console.error(
      "Erreur lors de la récupération des dimensions de l'image distante :",
      error
    );
  }
};
