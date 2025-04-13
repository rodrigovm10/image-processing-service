import { UploadedFile } from 'express-fileupload'
import { ImageEntity } from '../entities/image.entity'
import { TransformDto } from '../dto/images/transform.dto'

export abstract class ImageRepository {
  public abstract getAll(): Promise<ImageEntity[]>
  public abstract findById(imageId: string): Promise<ImageEntity>
  public abstract create(file: UploadedFile): Promise<ImageEntity>
  public abstract transform(imageId: string, transformDto: TransformDto): Promise<ImageEntity>
}
