import { CustomError } from '../errors/custom.error'

export class ImageEntity {
  // TODO: Add metadata
  private constructor(public id: string, public url: string) {}

  public static fromObject(object: { [key: string]: any }) {
    const { id, _id, url } = object

    if (!id || !_id) throw CustomError.badRequest('Missing ID')
    if (!url) throw CustomError.badRequest('Missing url')

    return new ImageEntity(_id || id, url)
  }
}
