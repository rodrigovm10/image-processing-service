import { CustomError } from '../errors/custom.error'

export class ImageEntity {
  // TODO: Add metadata
  constructor(public id: string, public url: string, public metadata: string) {}

  // public static fromObject(object: { [key: string]: any }) {
  //   const { id, _id, username, password } = object

  //   if (!id || !_id) throw CustomError.badRequest('Missing ID')
  //   if (!username) throw CustomError.badRequest('Missing username')
  //   if (!password) throw CustomError.badRequest('Missing password')

  //   return new UserEntity(_id || id, username, password)
  // }
}
