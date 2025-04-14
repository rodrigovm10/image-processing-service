import { Router } from 'express'
import { ImagesController } from './controller'
import { AuthMiddleware } from '../middleware/auth.middleware'
import { ImageUploadMiddleware } from '../middleware/image-upload.middleware'
import { ImageRepositoryImpl } from '../../infrastructure/repositories/image.repository.impl'
import { MongoImageDatasource } from '../../infrastructure/datasources/mongo-image.datasource'
import { S3ImageDatasource } from '../../infrastructure/datasources/s3-image.datasource'

export class ImagesRoutes {
  public static get routes(): Router {
    const router = Router()

    const s3ImageDatasource = new S3ImageDatasource()
    const mongoImageDatasource = new MongoImageDatasource()
    const imageRepository = new ImageRepositoryImpl(mongoImageDatasource, s3ImageDatasource)

    const imagesController = new ImagesController(imageRepository)

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
