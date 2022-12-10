const models = require("../models");
export class RolesController {
  constructor() {
    this.roles = [];
  }

  getRoles() {
    return this.roles;
  }

  addRole(role) {
    this.roles.push(role);
  }
}
