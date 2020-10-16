'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SalariosSchema extends Schema {
  up() {
    this.create('salarios', (table) => {
      table.increments()
      table
        .integer("emprego_id")
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('empregos')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table.double("valor").notNullable().default(0)
      table.string("vigencia", 7).notNullable()
      table.bool("ativo").notNullable().default(true)
      table.timestamps()
    })
  }

  down() {
    this.drop('salarios')
  }
}

module.exports = SalariosSchema
