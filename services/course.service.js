const { Course } = require("../models");

class CourseServices {
  async createCourseLanding(req) {
    const { image, video, ...data } = req.body;
    data.meta = JSON.stringify({
      image,
      video,
    });

    await Course.create(data).then((result) => {
      return result;
    });
  }

  async getCourseLanding() {
    await Course.findAll().then((result) => {
      return result;
    });
  }
}

module.exports = new CourseServices();
