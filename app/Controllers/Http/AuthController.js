'use strict'
const userModel = use('App/Models/User')

class AuthController {
  async register({
    auth,
    request,
    response
  }) {
    const userData = request.only(['email', 'password', 'username'])

    try {
      const newUser = await userModel.create(userData)

      const token = await auth
        .withRefreshToken()
        .generate(newUser)

      return response.json({
        status: "success",
        token: token.token,
        refreshToken: token.refreshToken,
      })
    } catch (err) {
      return response.status(400).json({
        status: "error",
        message: `Error while trying create a new user... ${err}`
      })
    }
  }

  async login({
    auth,
    request,
    response
  }) {
    try {
      const {
        email,
        password
      } = request.all()

      const authData = await auth.withRefreshToken().attempt(email, password)

      return {
        token: authData.token,
        refreshToken: authData.token,
        data: {
          nome: "Teste",
          idade: 32

        }
      }

    } catch (error) {
      response.status(400).json({
        status: "error",
        message: `Can't find a Email/Password`,
      })
    }
  }
}

module.exports = AuthController
