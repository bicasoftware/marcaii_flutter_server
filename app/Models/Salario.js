'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Salario extends Model {
  emprego() {
    return this.belongsTo("App/Models/Emprego")
  }
}

module.exports = Salario
