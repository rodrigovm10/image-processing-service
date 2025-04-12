export class LoginUserDto {
  private constructor(public readonly username: string, public readonly password: string) {}

  public static create(object: { [key: string]: any }): [string?, LoginUserDto?] {
    const { username, password } = object

    if (!username) return ['Missing username']
    if (!password) return ['Missing password']
    if (password.length < 6) return ['Password too short']

    return [undefined, new LoginUserDto(username, password)]
  }
}
