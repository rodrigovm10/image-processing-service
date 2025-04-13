import { UserModel } from '../../data/models/user.model'
import { BcryptAdapter } from '../../config/bcrypt.adapter'
import { LoginUserDto } from '../../domain/dto/auth/login.dto'
import { UserEntity } from '../../domain/entities/user.entity'
import { CustomError } from '../../domain/errors/custom.error'
import { RegisterUserDto } from '../../domain/dto/auth/register.dto'
import { AuthDatasource } from '../../domain/datasources/auth.datasource'

export class AuthDatasourceImpl implements AuthDatasource {
  public async loginUser(loginUserDto: LoginUserDto): Promise<UserEntity> {
    const { password, username } = loginUserDto

    const user = await UserModel.findOne({
      username,
    })

    if (!user) throw CustomError.notFound('Username not exists')

    try {
      const isPasswordCorrect = BcryptAdapter.compare(password, user.password)

      if (!isPasswordCorrect) throw CustomError.badRequest('Password is not correct')

      return UserEntity.fromObject(user)
    } catch (error) {
      throw CustomError.internalServer(String(error))
    }
  }
  public async registerUser(registerUserDto: RegisterUserDto): Promise<UserEntity> {
    const { password, username } = registerUserDto

    const userExists = await UserModel.findOne({
      username,
    })

    if (userExists) throw CustomError.badRequest('Email already exists')

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
