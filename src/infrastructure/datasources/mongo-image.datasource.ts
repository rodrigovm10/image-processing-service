import { ImageModel } from '../../data/models/image.model'
import { CustomError } from '../../domain/errors/custom.error'
import { ImageEntity } from '../../domain/entities/image.entity'
import { CreateImageDto } from '../../domain/dto/images/create-image.dto'
import { ImageDatabaseDatasource } from '../../domain/datasources/image-database.datasource'

export class MongoImageDatasource implements ImageDatabaseDatasource {
  public getAll(): Promise<ImageEntity[]> {
    throw new Error('Method not implemented.')
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
