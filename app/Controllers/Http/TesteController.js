"use strict";

class TesteController {
  async call({ response }) {
    response.status(200).send({
      status: "ok",
    });
  }
}

module.exports = TesteController;
