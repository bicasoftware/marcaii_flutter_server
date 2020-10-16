"use strict";

const { list } = require("@adonisjs/framework/src/Route/Store");
const { query } = require("../../Models/Salario");

const _empregos = use("App/Models/Emprego");
const _salarios = use("App/Models/Salario");
const _diferenciadas = use("App/Models/Diferenciada");

class EmpregoController {
  async listAll({ response }) {
    const empregos = await _empregos
      .query()
      .with("horas")
      .with("salarios")
      .with("diferenciadas")
      .fetch();

    response.status(200).send(empregos);
  }

  async findById({ response, params }) {
    const emprego = await _empregos
      .query()
      .where({ id: params.id })
      .with("horas")
      .with("salarios")
      .with("diferenciadas")
      .fetch();

    response.status(200).send(emprego);
  }

  async remove({ response, params }) {
    const count = await _empregos.query().where({ id: params.id }).delete();

    response.status(200).send({
      removed: count === 1,
    });
  }

  async insert({ response, request }) {
    const data = request.only([
      "nome",
      "porc",
      "porc_completa",
      "banco_horas",
      "saida",
      "carga_horaria",
      "fechamento",
      "ativo",
    ]);

    let { salarios, diferenciadas } = request.only([
      "salarios",
      "diferenciadas",
    ]);

    const emprego = await _empregos.create(data);
    salarios.forEach((s) => (s.emprego_id = emprego.id));
    salarios = await _salarios.createMany(salarios);

    diferenciadas.forEach((d) => (d.emprego_id = emprego.id));
    diferenciadas = await _diferenciadas.createMany(diferenciadas);

    emprego.salarios = salarios;
    emprego.diferenciadas = diferenciadas;

    response.status(200).send(emprego);
  }

  async update({ response, request, params }) {
    const data = request.only([
      "nome",
      "porc",
      "porc_completa",
      "banco_horas",
      "saida",
      "carga_horaria",
      "fechamento",
      "ativo",
    ]);

    let { salarios, diferenciadas } = request.only([
      "salarios",
      "diferenciadas",
    ]);

    await _empregos.query().where("id", params.id).update(data);

    await _salarios
      .query()
      .where({
        emprego_id: params.id,
      })
      .delete();

    salarios.forEach((s) => (s.emprego_id = params.id));
    await _salarios.createMany(salarios);

    await _diferenciadas
      .query()
      .where({
        emprego_id: params.id,
      })
      .delete();

    diferenciadas.forEach((d) => (d.emprego_id = params.id));
    await _diferenciadas.createMany(diferenciadas);

    const emprego = await _empregos
      .query()
      .where("id", params.id)
      .with("salarios")
      .with("diferenciadas")
      .fetch();

    response.status(200).send(emprego);
  }
}

module.exports = EmpregoController;
