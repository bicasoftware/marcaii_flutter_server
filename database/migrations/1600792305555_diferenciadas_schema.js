'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DiferenciadasSchema extends Schema {
  up() {
    this.create('diferenciadas', (table) => {
      table.increments()
      table
        .integer("emprego_id")
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('empregos')
        .onDelete('CASCADE')
        .onUpdate('CASCADE')

      table.integer("porc").notNullable().default(50)
      table.integer("weekday").notNullable().default(0)
      table.string("vigencia", 7).notNullable()
      table.bool("ativo").notNullable().default(true)
      table.timestamps()
    })
  }

  down() {
    this.drop('diferenciadas')
  }
}

module.exports = DiferenciadasSchema
