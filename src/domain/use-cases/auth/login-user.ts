import { LoginUserDto } from '../../dto/auth/login.dto'
import { UserEntity } from '../../entities/user.entity'
import { CustomError } from '../../errors/custom.error'
import { AuthRepository } from '../../repositories/auth.repository'

interface UserToken {
  user: UserEntity
  token: string
}

interface LoginUserUseCase {
  execute(loginUserDto: LoginUserDto): Promise<UserToken>
}

type SignToken = (payload: Object, duration?: string) => Promise<string | null>

export class LoginUser implements LoginUserUseCase {
  constructor(
    private readonly authRepository: AuthRepository,
    private readonly signToken: SignToken
  ) {}

  public async execute(loginUserDto: LoginUserDto): Promise<UserToken> {
    const user = await this.authRepository.loginUser(loginUserDto)

    const token = await this.signToken({ id: user.id })

    if (!token) throw CustomError.internalServer('Error generatin token')

    return { user, token }
  }
}
