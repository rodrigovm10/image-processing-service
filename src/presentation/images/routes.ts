import { Router } from 'express'
import { ImagesController } from './controller'

export class ImagesRoutes {
  public static get routes(): Router {
    const router = Router()

    const imagesController = new ImagesController()

    router.get('/', imagesController.retrieveImages)
    router.get('/:id', imagesController.retrieveImages)

    router.post('/', imagesController.saveImage)
    router.post('/:id/transform', imagesController.transformImage)

    return router
  }
}
