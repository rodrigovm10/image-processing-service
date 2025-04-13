import { UploadedFile } from 'express-fileupload'
import { ImageEntity } from '../../domain/entities/image.entity'
import { TransformDto } from '../../domain/dto/images/transform.dto'
import { ImageStorageDatasource } from '../../domain/datasources/image-storage.datasource'

export class S3ImageDatasource implements ImageStorageDatasource {
  public upload(file: UploadedFile): Promise<string> {
    throw new Error('Method not implemented.')
  }
  public transform(file: UploadedFile, options: TransformDto): Promise<ImageEntity> {
    throw new Error('Method not implemented.')
  }
}
