import { UploadedFile } from 'express-fileupload'
import { ImageEntity } from '../../entities/image.entity'
import { ImageRepository } from '../../repositories/image.repository'
import { CreateImageDto } from '../../dto/images/create-image.dto'

interface SaveImageUseCase {
  execute(createImageDto: CreateImageDto): Promise<ImageEntity>
}

export class SaveImage implements SaveImageUseCase {
  constructor(private readonly imageRepository: ImageRepository) {}

  public execute(createImageDto: CreateImageDto): Promise<ImageEntity> {
    return this.imageRepository.create(createImageDto)
  }
}
