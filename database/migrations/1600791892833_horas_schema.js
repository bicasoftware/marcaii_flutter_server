'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class HorasSchema extends Schema {
  up() {
    this.create('horas', (table) => {
      table.increments()
      table
        .integer("emprego_id")
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('empregos')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
      table.datetime("data")
      table.integer("tipo").notNullable().default(0)
      table.string("inicio").notNullable().default("18:00")
      table.string("termino").notNullable().default("18:00")
      table.timestamps()
    })
  }

  down() {
    this.drop('horas')
  }
}

module.exports = HorasSchema
