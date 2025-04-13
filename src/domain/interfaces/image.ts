export interface Transformations {
  transformations: TransformationsClass
}

export interface TransformationsClass {
  resize: Resize
  crop: Crop
  rotate: number
  format: number
  filters: Filters
}

export interface Crop {
  width: number
  height: number
  x: number
  y: number
}

export interface Filters {
  grayscale: boolean
  sepia: boolean
}

export interface Resize {
  width: number
  height: number
}

export enum Format {
  JPEG = 'jpeg',
  PNG = 'png',
  WEBP = 'webp',
  AVIF = 'avif',
}
