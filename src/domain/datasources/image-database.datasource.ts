import { ImageEntity } from '../entities/image.entity'

export abstract class ImageDatabaseDatasource {
  abstract getAll(): Promise<ImageEntity[]>
  abstract findById(imageId: string): Promise<ImageEntity>
  abstract save(urlImage: string, user: string): Promise<ImageEntity>
  abstract update(id: string, data: Partial<ImageEntity>): Promise<ImageEntity>
}
