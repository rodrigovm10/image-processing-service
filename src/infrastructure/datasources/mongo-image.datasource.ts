import { ImageEntity } from '../../domain/entities/image.entity'
import { ImageDatabaseDatasource } from '../../domain/datasources/image-database.datasource'

export class MongoImageDatasource implements ImageDatabaseDatasource {
  public getAll(): Promise<ImageEntity[]> {
    throw new Error('Method not implemented.')
  }

  public findById(id: string): Promise<ImageEntity> {
    throw new Error('Method not implemented.')
  }

  public save(image: Partial<ImageEntity>): Promise<ImageEntity> {
    throw new Error('Method not implemented.')
  }

  public update(id: string, data: Partial<ImageEntity>): Promise<ImageEntity> {
    throw new Error('Method not implemented.')
  }
}
