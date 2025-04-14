import { Request, Response } from 'express'
import { UploadedFile } from 'express-fileupload'
import { ImageRepository } from '../../domain/repositories/image.repository'
import { SaveImage } from '../../domain/use-cases/images/save-image'
import { CustomError } from '../../domain/errors/custom.error'
import { CreateImageDto } from '../../domain/dto/images/create-image.dto'
import { Validators } from '../../config/validators'
import { RetrieveAllImages } from '../../domain/use-cases/images/retrieve-all-images'

export class ImagesController {
  constructor(private readonly imageRepository: ImageRepository) {}

  private handleError = (res: Response, error: unknown) => {
    if (error instanceof CustomError) {
      res.status(error.statusCode).json({ error: error.message })
      return
    }
    console.log(error)

    res.status(500).json({ error: 'Internal Server Error' })
  }

  public saveImage = (req: Request, res: Response) => {
    const file = req.body.files.at(0) as UploadedFile
    const [error, createImageDto] = CreateImageDto.create({
      user: req.body.user.id,
      file: file,
    })

    if (error) {
      res.status(404).json({ error })
      return
    }

    new SaveImage(this.imageRepository)
      .execute(createImageDto!)
      .then(image => res.status(201).json(image))
      .catch(error => this.handleError(res, error))
  }

  public transformImage = (req: Request, res: Response) => {
    res.json('Transforming image...')
  }

  public retrieveImage = (req: Request, res: Response) => {}

  public retrieveImages = (req: Request, res: Response) => {
    const { userId } = req.params

    if (!Validators.isMongoId(userId)) {
      res.status(400).json({ error: 'Invalid user ID' })
      return
    }

    new RetrieveAllImages(this.imageRepository)
      .execute(userId)
      .then(images => res.json(images))
      .catch(error => this.handleError(res, error))
  }
}
