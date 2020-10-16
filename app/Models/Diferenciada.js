"use strict";

const BaseModel = import("./BaseModel");

class Diferenciada extends BaseModel {
  constructor() {
    super();
  }

  emprego() {
    return this.belongsTo("App/Models/Emprego");
  }
}

module.exports = Diferenciada;
