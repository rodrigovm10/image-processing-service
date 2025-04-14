import { Request, Response } from 'express'
import { UploadedFile } from 'express-fileupload'
import { ImageRepository } from '../../domain/repositories/image.repository'
import { SaveImage } from '../../domain/use-cases/images/save-image'
import { CustomError } from '../../domain/errors/custom.error'
import { CreateImageDto } from '../../domain/dto/images/create-image.dto'

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

  public retrieveImage = (req: Request, res: Response) => {
    res.json('Retrieving image...')
  }

  public retrieveImages = (req: Request, res: Response) => {
    res.json('Retrieving images...')
  }
}
