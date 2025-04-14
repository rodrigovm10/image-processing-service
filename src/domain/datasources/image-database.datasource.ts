import { GetImageDto } from '../dto/images/get-image.dto'
import { ImageEntity } from '../entities/image.entity'

export abstract class ImageDatabaseDatasource {
  abstract getAll(userId: string): Promise<ImageEntity[]>
  abstract findById(getImageDto: GetImageDto): Promise<ImageEntity>
  abstract save(urlImage: string, user: string): Promise<ImageEntity>
  abstract update(id: string, data: Partial<ImageEntity>): Promise<ImageEntity>
}
