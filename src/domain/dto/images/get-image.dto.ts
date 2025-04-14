import { Validators } from '../../../config/validators'

export class GetImageDto {
  private constructor(public readonly userId: string, public readonly imageId: string) {}

  public static create(object: { [key: string]: any }): [string?, GetImageDto?] {
    const { userId, imageId } = object

    if (!userId) return ['Missing user']
    if (!Validators.isMongoId(userId)) return ['Invalid User ID']

    if (!imageId) return ['Missing image ID']
    if (!Validators.isMongoId(imageId)) return ['Invalid Image ID']

    return [undefined, new GetImageDto(userId, imageId)]
  }
}
