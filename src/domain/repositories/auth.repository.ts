import { LoginUserDto } from '../dto/auth/login.dto'
import { UserEntity } from '../entities/user.entity'
import { RegisterUserDto } from '../dto/auth/register.dto'

export abstract class AuthRepository {
  abstract loginUser(loginUserDto: LoginUserDto): Promise<UserEntity>
  abstract registerUser(registerUserDto: RegisterUserDto): Promise<UserEntity>
}
