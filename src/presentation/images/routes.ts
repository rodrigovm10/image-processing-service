import { Router } from 'express'
import { ImagesController } from './controller'
import { AuthMiddleware } from '../middleware/auth.middleware'
import { ImageUploadMiddleware } from '../middleware/image-upload.middleware'

export class ImagesRoutes {
  public static get routes(): Router {
    const router = Router()

    const imagesController = new ImagesController()

    router.use(AuthMiddleware.validateJWT)

    router.get('/', imagesController.retrieveImages)
    router.get('/:id', imagesController.retrieveImages)

    router.post('/', [ImageUploadMiddleware.containFile], imagesController.saveImage)
    router.post(
      '/:id/transform',
      [ImageUploadMiddleware.containFile],
      imagesController.transformImage
    )

    return router
  }
}
