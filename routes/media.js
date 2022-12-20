const express = require("express");
const router = express.Router();

router.post("/", upload.single("media"), async function (req, res) {
  try {
    if (!req.file)
      return res.status(400).json({
        success: false,
        message: "No file selected",
      });

    // check the file type
    const imageTypes = ["image/png", "image/jpeg", "image/jpg", "image/webp"];
    const videoTypes = ["video/mp4", "video/wepm"];
    const fileTypes = [""];

    // call services based on the file type
    if (imageTypes.includes(req.file.mimetype)) {
      // call upload image helper

      console.log("nice one");
    } else if (videoTypes.includes(req.file.mimetype)) {
      console.log("this is working");
    } else if (fileTypes.includes(req.file.mimetype)) {
    } else {
      return res.status(400).json({
        success: false,
        message: "Invalid media file",
      });
    }

    return res.status(201).json({
      success: true,
      message: "media upload successfully",
      data: { secure_url, public_id },
    });
  } catch (error) {
    console.log(error.message);
    // remove the file from upload folder
    if (fs.existsSync(req.file.path)) {
      fs.unlinkSync(req.file.path);
    }
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }

  // res.send("media is working");
});

module.exports = router;
