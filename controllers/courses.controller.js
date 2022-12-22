const { CourseLanding } = require("../models");

exports.index = async function (req, res) {
  return res.status(200).send({
    message: "Working",
  });
};

exports.store = async function (req, res) {
  return res.status(201).send({
    message: "This is store route",
  });
};

exports.update = async function (req, res, next) {
  return res.status(200).send({
    message: "this is update",
  });
};

exports.destroy = async function (req, res, next) {
  return res.status(200).send({
    message: "this is delete endpoint",
  });
};

exports.single = async function (req, res, next) {
  return res.status(200).send({
    message: "this is a single route",
  });
};

// Course Landing
exports.getCourseLanding = async function (req, res, next) {
  const courseLanding = await CourseLanding.findAll().then((result) => {
    return result;
  });

  if (courseLanding)
    return res.status(200).send({
      status: true,
      message: "Course Landings fetch successfully",
      data: {
        courseLanding,
      },
    });
};

exports.postCourseLanding = async function (req, res, next) {
  // call course landing services
  try {
    const { image, video, ...data } = req.body;
    data.meta = JSON.stringify({
      image,
      video,
    });

    await CourseLanding.create(data).then((result) => {
      res.status(201).send({
        success: true,
        message: "created successfully",
        data: result,
      });
    });
  } catch (error) {
    next(error);
  }
};
