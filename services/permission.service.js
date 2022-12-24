const { Permission } = require("../models");

class PermissionsServices {
  async getAll() {
    return Permission.findAll();
  }

  async getPermission(id) {
    return await Permission.findOne({
      where: { id },
    });
  }

  async createPermission(req) {
    let { title, meta, description, roleId } = req.body;
    let data = {
      title,
      meta,
      description,
      roleId: roleId,
    };

    return await Permission.create(data);
  }

  async getPermissionTitle(title) {
    return await Permission.findOne({
      where: { title },
    });
  }
}

module.exports = new PermissionsServices();
