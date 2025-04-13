import { Request, Response } from 'express'

export class ImagesController {
  constructor() {}

  public saveImage = (req: Request, res: Response) => {
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
