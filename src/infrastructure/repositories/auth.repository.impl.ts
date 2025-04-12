import { AuthDatasource } from '../../domain/datasources/auth.repository'
import { LoginUserDto } from '../../domain/dto/auth/login.dto'
import { RegisterUserDto } from '../../domain/dto/auth/register.dto'
import { UserEntity } from '../../domain/entities/user.entity'
import { AuthRepository } from '../../domain/repositories/auth.repository'

export class AuthRepositoryImpl implements AuthRepository {
  constructor(private readonly authDatasource: AuthDatasource) {}

  public loginUser(loginUserDto: LoginUserDto): Promise<UserEntity> {
    return this.authDatasource.loginUser(loginUserDto)
  }
  public registerUser(registerUserDto: RegisterUserDto): Promise<UserEntity> {
    return this.authDatasource.registerUser(registerUserDto)
  }
}
