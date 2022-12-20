const multer = require("multer");
const upload = multer({ dest: "./upload" });
const cloudinary = require("cloudinary").v2;
const fs = require("fs");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_USERNAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET_KEY,
  secure: true,
});

const options = {
  use_filename: true,
  unique_filename: false,
  overwrite: true,
};

const uploadImage = async (path) => {
  // Upload the image
  const result = await cloudinary.uploader.upload(path, options);

  const { secure_url, public_id } = result;

  // remove the file from upload folder
  if (fs.existsSync(path)) {
    fs.unlinkSync(path);
  }
};

const uploadVideo = async (path) => {
  const result = await cloudinary.uploader.upload(path, options);

  const { secure_url, public_id } = result;

  // remove the file from upload folder
  if (fs.existsSync(path)) {
    fs.unlinkSync(path);
  }
};

const uploadFile = async (path) => {
  const result = await cloudinary.uploader.upload(path, options);

  const { secure_url, public_id } = result;

  // remove the file from upload folder
  if (fs.existsSync(path)) {
    fs.unlinkSync(path);
  }
};

module.exports = {
  uploadImage,
  uploadVideo,
  uploadFile,
};
