import { Request, Response } from 'express'

export class AuthController {
  constructor() {}

  public login = (req: Request, res: Response) => {
    res.json('login')
  }

  public register = (req: Request, res: Response) => {
    res.json('register')
  }
}
