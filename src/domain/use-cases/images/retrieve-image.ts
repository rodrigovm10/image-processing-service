import { GetImageDto } from '../../dto/images/get-image.dto'
import { ImageEntity } from '../../entities/image.entity'
import { ImageRepository } from '../../repositories/image.repository'

interface RetrieveImageUseCase {
  execute(getImageDto: GetImageDto): Promise<ImageEntity>
}

export class RetrieveImage implements RetrieveImageUseCase {
  constructor(private readonly imageRepository: ImageRepository) {}

  public execute(getImageDto: GetImageDto): Promise<ImageEntity> {
    return this.imageRepository.findById(getImageDto)
  }
}
