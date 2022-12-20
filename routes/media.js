const express = require("express");
const router = express.Router();
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

router.post("/", upload.single("media"), async function (req, res) {
  console.log(req.file);
  const options = {
    use_filename: false,
    unique_filename: true,
    overwrite: true,
  };

  try {
    // Upload the image
    const result = await cloudinary.uploader.upload(req.file.path, options);

    const { secure_url, public_id } = result;

    // remove the file from upload folder
    if (fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    return res.status(201).json({
      success: true,
      message: "media upload successfully",
      data: { secure_url, public_id },
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }

  // res.send("media is working");
});

module.exports = router;
