import { Router } from 'express'
import { AuthController } from './controller'
import { AuthDatasourceImpl } from '../../infrastructure/datasources/auth.datasource.impl'
import { AuthRepositoryImpl } from '../../infrastructure/repositories/auth.repository.impl'

export class AuthRoutes {
  public static get routes(): Router {
    const router = Router()

    const authDatasource = new AuthDatasourceImpl()
    const authRepository = new AuthRepositoryImpl(authDatasource)

    const authController = new AuthController(authRepository)

    router.post('/login', authController.login)
    router.post('/register', authController.register)

    return router
  }
}
