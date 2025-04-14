import { ImageEntity } from '../entities/image.entity'
import { GetImageDto } from '../dto/images/get-image.dto'
import { TransformDto } from '../dto/images/transform.dto'
import { CreateImageDto } from '../dto/images/create-image.dto'

export abstract class ImageRepository {
  public abstract getAll(userId: string): Promise<ImageEntity[]>
  public abstract findById(getImageDto: GetImageDto): Promise<ImageEntity>
  public abstract create(createImageDto: CreateImageDto): Promise<ImageEntity>
  public abstract transform(imageId: string, transformDto: TransformDto): Promise<ImageEntity>
}
