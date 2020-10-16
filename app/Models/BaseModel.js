"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class BaseModel extends Model {
  constructor() {
    super();
  }

  static get hidden() {
    return ["created_at", "updated_at"];
  }
}

module.exports = BaseModel;
