'use strict'

const _empregos = use("App/Models/Emprego")
const _horas = use("App/Models/Hora")
const _salarios = use("App/Models/Salario")
const _diferenciada = use("App/Models/Diferenciada")

/*
|--------------------------------------------------------------------------
| EmpregoSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class EmpregoSeeder {
  async run() {

    let emprego = {
      // user_id: 1,
      nome: "Analista",
      porc: 50,
      porc_completa: 100,
      carga_horaria: 220,
      saida: "18:00",
      banco_horas: true,
      ativo: true,
      fechamento: 25
    }

    emprego = await _empregos.create(emprego)

    let salario = {
      emprego_id: emprego.id,
      valor: 1300.0,
      vigencia: "01/2010",
      ativo: true
    }

    await _salarios.create(salario)

    let hora = {
      data: "2020-09-10",
      tipo: 1,
      inicio: "18:00",
      termino: "19:00",
      emprego_id: emprego.id
    }

    await _horas.create(hora)

    let hora2 = {
      data: "2020-09-11",
      tipo: 0,
      inicio: "18:00",
      termino: "19:00",
      emprego_id: emprego.id
    }

    await _horas.create(hora2)

    let diferenciada = {
      porc: 140,
      weekday: 0,
      vigencia: "01/2020",
      ativo: true,
      emprego_id: emprego.id,
    }

    await _diferenciada.create(diferenciada)

    let diferenciada2 = {
      porc: 120,
      weekday: 6,
      vigencia: "01/2020",
      ativo: true,
      emprego_id: emprego.id,
    }

    await _diferenciada.create(diferenciada2)

  }
}

module.exports = EmpregoSeeder
