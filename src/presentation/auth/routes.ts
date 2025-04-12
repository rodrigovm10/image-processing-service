import { Router } from 'express'
import { AuthController } from './controller'

export class AuthRoutes {
  public static get routes(): Router {
    const router = Router()

    const authController = new AuthController()

    router.post('/login', authController.login)
    router.post('/register', authController.register)

    return router
  }
}
