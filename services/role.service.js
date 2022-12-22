const { Role } = require("../models");

module.exports = class Permissions {
  async getRole(id) {
    console.log(id);
    return await Role.findOne({
      where: { id },
    });
  }
};
