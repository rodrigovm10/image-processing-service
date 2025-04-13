import { Request, Response } from 'express'
import { UploadedFile } from 'express-fileupload'

export class ImagesController {
  constructor() {}

  public saveImage = (req: Request, res: Response) => {
    const file = req.body.files.at(0) as UploadedFile
    res.json('Saving image...')
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
