import { UploadedFile } from 'express-fileupload'
import { TransformDto } from '../../domain/dto/images/transform.dto'
import { ImageEntity } from '../../domain/entities/image.entity'
import { ImageRepository } from '../../domain/repositories/image.repository'
import { ImageDatasource } from '../../domain/datasources/image-database.datasource'

export class ImageRepositoryImpl implements ImageRepository {
  constructor(private readonly imageDatasource: ImageDatasource) {}

  public getAll(): Promise<ImageEntity[]> {
    return this.imageDatasource.getAll()
  }
  public findById(imageId: string): Promise<ImageEntity> {
    return this.imageDatasource.findById(imageId)
  }
  public create(file: UploadedFile): Promise<ImageEntity> {
    return this.imageDatasource.create(file)
  }
  public transform(imageId: string, transformDto: TransformDto): Promise<ImageEntity> {
    return this.imageDatasource.transform(imageId, transformDto)
  }
}
