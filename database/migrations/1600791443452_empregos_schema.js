'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmpregosSchema extends Schema {
  up() {
    this.create('empregos', (table) => {
      table.increments()
      table.string("nome").notNullable()
      table.integer("porc").notNullable().default(50)
      table.integer("porc_completa").notNullable().default(100)
      table.bool("banco_horas").notNullable().default(false)
      table.string("saida").notNullable().default("18:00")
      table.integer("carga_horaria").notNullable().default(220)
      table.integer("fechamento").notNullable().default(25)
      table.bool("ativo").notNullable().default(true)
      table.timestamps()
      // table
      //   .integer("user_id")
      //   .notNullable()
      //   .unsigned()
      //   .references('id')
      //   .inTable('users')

    })
  }

  down() {
    this.drop('empregos')
  }
}

module.exports = EmpregosSchema
