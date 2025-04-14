import { ImageModel } from '../../data/models/image.model'
import { CustomError } from '../../domain/errors/custom.error'
import { ImageEntity } from '../../domain/entities/image.entity'
import { ImageDatabaseDatasource } from '../../domain/datasources/image-database.datasource'

export class MongoImageDatasource implements ImageDatabaseDatasource {
  public async getAll(userId: string): Promise<ImageEntity[]> {
    try {
      const images = await ImageModel.find()

      if (!images) throw CustomError.notFound('There is not images for this user')

      return images.map(ImageEntity.fromObject)
    } catch (error) {
      throw CustomError.internalServer(String(error))
    }
  }

  public findById(id: string): Promise<ImageEntity> {
    throw new Error('Method not implemented.')
  }

  public async save(urlImage: string, user: string): Promise<ImageEntity> {
    try {
      const image = new ImageModel({ url: urlImage, user })

      image.save()

      return ImageEntity.fromObject(image)
    } catch (error) {
      throw CustomError.internalServer(String(error))
    }
  }

  public update(id: string, data: Partial<ImageEntity>): Promise<ImageEntity> {
    throw new Error('Method not implemented.')
  }
}
