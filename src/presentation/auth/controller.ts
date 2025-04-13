import { Request, Response } from 'express'
import { JwtAdapter } from '../../config/jwt-adapter'
import { CustomError } from '../../domain/errors/custom.error'
import { LoginUserDto } from '../../domain/dto/auth/login.dto'
import { LoginUser } from '../../domain/use-cases/auth/login-user'
import { RegisterUserDto } from '../../domain/dto/auth/register.dto'
import { RegisterUser } from '../../domain/use-cases/auth/register-user'
import { AuthRepository } from '../../domain/repositories/auth.repository'

export class AuthController {
  constructor(private readonly authRepository: AuthRepository) {}

  private handleError = (res: Response, error: unknown) => {
    if (error instanceof CustomError) {
      res.status(error.statusCode).json({ error: error.message })
      return
    }
    console.log(error)

    res.status(500).json({ error: 'Internal Server Error' })
  }

  public login = (req: Request, res: Response) => {
    const [error, loginUserDto] = LoginUserDto.create(req.body)

    if (error) {
      res.status(400).json({ error })
    }

    new LoginUser(this.authRepository, JwtAdapter.generateToken)
      .execute(loginUserDto!)
      .then(user => res.status(200).json(user))
      .catch(error => this.handleError(res, error))
  }

  public register = (req: Request, res: Response) => {
    const [error, registerUserDto] = RegisterUserDto.create(req.body)

    if (error) {
      res.status(400).json({ error })
      return
    }

    new RegisterUser(this.authRepository, JwtAdapter.generateToken)
      .execute(registerUserDto!)
      .then(user => res.status(201).json(user))
      .catch(error => this.handleError(res, error))
  }
}
