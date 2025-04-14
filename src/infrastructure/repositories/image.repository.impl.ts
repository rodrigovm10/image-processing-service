import { TransformDto } from '../../domain/dto/images/transform.dto'
import { ImageEntity } from '../../domain/entities/image.entity'
import { ImageRepository } from '../../domain/repositories/image.repository'
import { MongoImageDatasource } from '../datasources/mongo-image.datasource'
import { S3ImageDatasource } from '../datasources/s3-image.datasource'
import { CreateImageDto } from '../../domain/dto/images/create-image.dto'
import { GetImageDto } from '../../domain/dto/images/get-image.dto'

export class ImageRepositoryImpl implements ImageRepository {
  constructor(
    private readonly mongoImageDatasource: MongoImageDatasource,
    private readonly s3ImageDatasource: S3ImageDatasource
  ) {}

  public getAll(userId: string): Promise<ImageEntity[]> {
    return this.mongoImageDatasource.getAll(userId)
  }

  public findById(getImageDto: GetImageDto): Promise<ImageEntity> {
    return this.mongoImageDatasource.findById(getImageDto)
  }

  public async create(createImageDto: CreateImageDto): Promise<ImageEntity> {
    const { file, user } = createImageDto

    const imageUrl = await this.s3ImageDatasource.upload(file)

    return this.mongoImageDatasource.save(imageUrl, user)
  }

  public transform(imageId: string, transformDto: TransformDto): Promise<ImageEntity> {
    throw Error('Method not implemented')
  }
}
