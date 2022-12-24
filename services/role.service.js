const { Role } = require("../models");

class RoleServices {
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
}

module.exports = new RoleServices();
