import { Crop, Filters, Format, Resize } from '../../interfaces/image'

export class TransformDto {
  private constructor(
    public readonly resize: Resize,
    public readonly crop: Crop,
    public readonly rotate: number,
    public readonly format: Format,
    public readonly filters: Filters
  ) {}

  private static isValidFormat(value: string): value is Format {
    return Object.values(Format).includes(value as Format)
  }

  public static create(object: { [key: string]: any }): [string?, TransformDto?] {
    const { resize, crop, rotate, format, filters } = object

    if (resize && isNaN(resize?.width)) return ['Resize width must be a number']
    if (resize && isNaN(resize?.height)) return ['Resize height must be a number']

    if (crop && isNaN(crop?.width)) return ['Crop width must be a number']
    if (crop && isNaN(crop?.height)) return ['Crop height must be a number']
    if (crop && isNaN(crop?.x)) return ['Crop x must be a number']
    if (crop && isNaN(crop?.y)) return ['Crop y must be a number']

    if (filters && typeof filters?.grayscale !== 'boolean')
      return ['Filter grayscale must be a boolean']
    if (filters && filters?.sepia !== 'boolean') return ['Crop sepia must be a boolean']

    if (rotate && isNaN(rotate)) return ['Rotate must be a number']

    if (format && this.isValidFormat(format)) {
      return [`Invalid format. Accepted formats are: ${Object.values(Format).join(', ')}`]
    }

    return [undefined, new TransformDto(resize, crop, rotate, format, filters)]
  }
}
