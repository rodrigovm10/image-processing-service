export class RegisterUserDto {
  private constructor(public readonly username: string, public readonly password: string) {}

  public static create(object: { [key: string]: any }): [string?, RegisterUserDto?] {
    const { username, password } = object

    if (!username) return ['Missing username']
    if (!password) return ['Missing password']
    if (password.length < 6) return ['Password too short']

    return [undefined, new RegisterUserDto(username, password)]
  }
}
