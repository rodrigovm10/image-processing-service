import { Router } from 'express'
import { AuthRoutes } from './auth/routes'
import { ImagesRoutes } from './images/routes'

export class AppRoutes {
  public static get routes(): Router {
    const router = Router()

    router.use('/api/auth', AuthRoutes.routes)
    router.use('/api/images', ImagesRoutes.routes)

    return router
  }
}
