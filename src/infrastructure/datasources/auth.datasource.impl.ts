import { BcryptAdapter } from '../../config/bcrypt.adapter'
import { UserModel } from '../../data/models/user.model'
import { AuthDatasource } from '../../domain/datasources/auth.repository'
import { LoginUserDto } from '../../domain/dto/auth/login.dto'
import { RegisterUserDto } from '../../domain/dto/auth/register.dto'
import { UserEntity } from '../../domain/entities/user.entity'
import { CustomError } from '../../domain/errors/custom.error'

export class AuthDatasourceImpl implements AuthDatasource {
  public async loginUser(loginUserDto: LoginUserDto): Promise<UserEntity> {
    throw new Error('Method not implemented.')
  }
  public async registerUser(registerUserDto: RegisterUserDto): Promise<UserEntity> {
    const { password, username } = registerUserDto

    try {
      const passwordHashed = BcryptAdapter.hash(password)

      const user = new UserModel({ password: passwordHashed, username })

      user.save()

      return UserEntity.fromObject(user)
    } catch (error) {
      throw CustomError.internalServer(String(error))
    }
  }
}
