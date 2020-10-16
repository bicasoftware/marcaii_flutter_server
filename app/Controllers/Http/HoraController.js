"use strict";

const _horas = use("App/Models/Hora");

class HoraController {
  async insert({ request, response }) {
    const horaData = request.only([
      "data",
      "tipo",
      "inicio",
      "termino",
      "emprego_id",
    ]);

    console.log(horaData);

    const hora = await _horas.create(horaData);

    response.status(200).send({
      id: hora.id,
      created_at: hora.created_at,
    });
  }

  async listAll({ response, params }) {
    const horas = await _horas.query().where("emprego_id", params.id).fetch();
    response.status(200).send(horas);
  }

  async remove({ response, params }) {
    const count = await _horas.query().where("id", params.id).delete();

    response.status(200).send({
      removed: count === 1,
    });
  }
}

module.exports = HoraController;
