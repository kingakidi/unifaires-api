const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();
const cloudinary = require("cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_USERNAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET_KEY,
});

router.post("/", upload.single("media"), async function (req, res) {
  try {
    const cloudUpload = await cloudinary.image(req.file.originalname, {
      secure: true,
    });

    if (cloudUpload) {
      return res.status(201).send({
        mediaUrl: cloudUpload,
      });
    }
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Connection Error",
    });
  }

  console.log(cloudUpload);
  res.send("media is working");
});

module.exports = router;
