'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Emprego extends Model {
  horas() {
    return this.hasMany('App/Models/Hora')
  }

  salarios() {
    return this.hasMany('App/Models/Salario')
  }

  diferenciadas() {
    return this.hasMany('App/Models/Diferenciada')
  }
}

module.exports = Emprego
