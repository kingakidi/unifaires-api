const bcrypt = require("bcryptjs");
const { User } = require("../models");

module.exports = class UsersServices {
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

    const data = ({ fullname, email, imageUrl, createdAt, updatedAt } = result);

    return data;
  }

  async verifyEmail(email) {
    return await User.findOne({ where: { email: email } });
  }
};
