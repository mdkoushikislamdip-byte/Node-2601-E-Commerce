const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.MY_CLOUD_NAME,
  api_key: process.env.MY_KEY,
  api_secret: process.env.MY_SECRET,
});

module.exports = cloudinary;