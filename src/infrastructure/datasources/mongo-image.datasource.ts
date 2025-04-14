import { ImageModel } from '../../data/models/image.model'
import { CustomError } from '../../domain/errors/custom.error'
import { ImageEntity } from '../../domain/entities/image.entity'
import { ImageDatabaseDatasource } from '../../domain/datasources/image-database.datasource'
import { UserModel } from '../../data/models/user.model'
import { GetImageDto } from '../../domain/dto/images/get-image.dto'

export class MongoImageDatasource implements ImageDatabaseDatasource {
  public async getAll(userId: string): Promise<ImageEntity[]> {
    const user = await UserModel.findOne({ _id: userId })

    if (!user) throw CustomError.badRequest('User does not exists')

    try {
      const images = await ImageModel.find({ user: userId })

      if (!images) throw CustomError.notFound('There is not images for this user')

      return images.map(ImageEntity.fromObject)
    } catch (error) {
      if (error instanceof CustomError) throw error
      throw CustomError.internalServer(String(error))
    }
  }

  public async findById(getImageDto: GetImageDto): Promise<ImageEntity> {
    const { userId, imageId } = getImageDto

    const user = await UserModel.findOne({ _id: userId })

    if (!user) throw CustomError.badRequest('User does not exists')

    try {
      const image = await ImageModel.findOne({ _id: imageId })

      if (!image) throw CustomError.notFound('Image not found')

      return ImageEntity.fromObject(image)
    } catch (error) {
      if (error instanceof CustomError) throw error
      throw CustomError.internalServer(String(error))
    }
  }

  public async save(urlImage: string, user: string): Promise<ImageEntity> {
    try {
      const image = new ImageModel({ url: urlImage, user })

      image.save()

      return ImageEntity.fromObject(image)
    } catch (error) {
      if (error instanceof CustomError) throw error
      throw CustomError.internalServer(String(error))
    }
  }

  public update(id: string, data: Partial<ImageEntity>): Promise<ImageEntity> {
    throw new Error('Method not implemented.')
  }
}
