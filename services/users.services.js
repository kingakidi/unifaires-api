const bcrypt = require("bcryptjs");
const { User } = require("../models");

class UsersServices {
  async getAll() {
    return await User.findAll();
  }

  async getById(id) {
    return;
  }

  async createUser(req) {
    let { fullname, email, password, imageUrl, permissionId } = req.body;

    const hashPassword = await bcrypt.hash(password, 10);

    const user = {
      fullname: fullname,
      email: email,
      password: hashPassword,
      imageUrl: imageUrl,
      permissionId: permissionId,
    };

    let result = await User.create(user);

    return {
      fullname: result.fullname,
      email: result.email,
      imageUrl: result.imageUrl,
      updatedAt: result.updatedAt,
      createdAt: result.createdAt,
    };
  }

  async verifyEmail(email) {
    return await User.findOne({ where: { email: email } });
  }
}

module.exports = new UsersServices();
