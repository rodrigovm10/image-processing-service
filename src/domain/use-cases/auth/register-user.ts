import { JwtAdapter } from '../../../config/jwt-adapter'
import { RegisterUserDto } from '../../dto/auth/register.dto'
import { UserEntity } from '../../entities/user.entity'
import { CustomError } from '../../errors/custom.error'
import { AuthRepository } from '../../repositories/auth.repository'

interface UserToken {
  user: UserEntity
  token: string
}

interface RegisterUserUseCase {
  execute(registerUserDto: RegisterUserDto): Promise<UserToken>
}

type SignToken = (payload: Object, duration?: string) => Promise<string | null>

export class RegisterUser implements RegisterUserUseCase {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly signToken: SignToken
  ) {}

  public async execute(registerUserDto: RegisterUserDto): Promise<UserToken> {
    const user = await this.authRepository.registerUser(registerUserDto)

    const token = await this.signToken({ id: user.id })

    if (!token) throw CustomError.internalServer('Error generating token')

    return {
      user,
      token,
    }
  }
}
