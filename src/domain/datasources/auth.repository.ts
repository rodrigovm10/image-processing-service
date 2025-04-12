import { LoginUserDto } from '../dto/auth/login.dto'
import { UserEntity } from '../entities/user.entity'
import { RegisterUserDto } from '../dto/auth/register.dto'

export abstract class AuthDatasource {
  abstract loginUser(loginUserDto: LoginUserDto): Promise<UserEntity>
  abstract registerUser(registerUserDto: RegisterUserDto): Promise<UserEntity>
}
