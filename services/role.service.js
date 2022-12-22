const { Role } = require("../models");

module.exports = class RoleServices {
  async getRoleById(id) {
    return await Role.findOne({
      where: { id },
    });
  }

  async getAll() {
    return await Role.findAll();
  }
  async update(req) {
    let { id } = req.params;
    let { ...data } = req.body;

    Role.update(data, { where: { id: id } });
  }
};
