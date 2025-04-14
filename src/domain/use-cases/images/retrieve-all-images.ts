import { ImageEntity } from '../../entities/image.entity'
import { ImageRepository } from '../../repositories/image.repository'

interface RetrieveAllImagesUseCase {
  execute(userId: string): Promise<ImageEntity[]>
}

export class RetrieveAllImages implements RetrieveAllImagesUseCase {
  constructor(private readonly imageRepository: ImageRepository) {}

  public execute(userId: string): Promise<ImageEntity[]> {
    return this.imageRepository.getAll(userId)
  }
}
