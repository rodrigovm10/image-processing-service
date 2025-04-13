import { UploadedFile } from 'express-fileupload'
import { ImageEntity } from '../entities/image.entity'
import { TransformDto } from '../dto/images/transform.dto'

export abstract class ImageStorageDatasource {
  abstract upload(file: UploadedFile): Promise<string>
  abstract transform(file: UploadedFile, options: TransformDto): Promise<ImageEntity>
}
