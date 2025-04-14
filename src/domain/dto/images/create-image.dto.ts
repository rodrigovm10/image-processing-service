import { UploadedFile } from 'express-fileupload'
import { Validators } from '../../../config/validators'

export class CreateImageDto {
  constructor(public readonly user: string, public readonly file: UploadedFile) {}

  public static create(object: { [key: string]: any }): [string?, CreateImageDto?] {
    const { user, file } = object

    if (!user) return ['Missing user']
    if (!Validators.isMongoId(user)) return ['Invalid User ID']

    if (!file) return ['Missing file']

    return [undefined, new CreateImageDto(user, file)]
  }
}
