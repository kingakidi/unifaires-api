const { Permission } = require("../models");

module.exports = class Permissions {
  async getPermission(id) {
    return await Permission.findOne({
      where: { id },
    });
  }
};
