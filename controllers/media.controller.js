const { fileUpload, removeLocalFile } = require("../helpers/uploads");

exports.store = async (req, res) => {
  const fileTypes = [
    "image/png",
    "image/jpeg",
    "image/jpg",
    "image/webp",
    "video/mp4",
    "video/wepm",
  ];

  try {
    if (req.file) {
      // call services based on the file type
      const { mimetype, path } = req.file;

      if (fileTypes.includes(mimetype)) {
        // call upload image helper

        const upload = await fileUpload(path);
        const { public_id, secure_url } = upload;
        if (fileUpload)
          return res.status(201).json({
            success: true,
            message: "media upload successfully",
            data: {
              public_id,
              url: secure_url,
            },
          });
      } else {
        return res.status(400).json({
          success: false,
          message: "Invalid media file",
        });
      }
    } else {
      return res.status(400).json({
        success: false,
        message: "No file selected",
      });
    }

    // check the file type
  } catch (error) {
    console.log(error.message);
    removeLocalFile(req.file.path);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
