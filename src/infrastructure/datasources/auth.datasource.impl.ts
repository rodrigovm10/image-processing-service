import { AuthDatasource } from '../../domain/datasources/auth.repository'
import { LoginUserDto } from '../../domain/dto/auth/login.dto'
import { RegisterUserDto } from '../../domain/dto/auth/register.dto'
import { UserEntity } from '../../domain/entities/user.entity'

export class AuthDatasourceImpl implements AuthDatasource {
  loginUser(loginUserDto: LoginUserDto): Promise<UserEntity> {
    throw new Error('Method not implemented.')
  }
  registerUser(registerUserDto: RegisterUserDto): Promise<UserEntity> {
    throw new Error('Method not implemented.')
  }
}
