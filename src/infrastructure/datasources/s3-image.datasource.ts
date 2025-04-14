import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3'
import fs from 'node:fs'

import { envs } from '../../config/envs'
import { UploadedFile } from 'express-fileupload'
import { ImageEntity } from '../../domain/entities/image.entity'
import { TransformDto } from '../../domain/dto/images/transform.dto'
import { ImageStorageDatasource } from '../../domain/datasources/image-storage.datasource'

export class S3ImageDatasource implements ImageStorageDatasource {
  private client: S3Client

  constructor() {
    this.client = new S3Client({
      region: envs.AWS_BUCKET_REGION,
      credentials: {
        accessKeyId: envs.AWS_PUBLIC_KEY,
        secretAccessKey: envs.AWS_SECRET_KEY,
      },
    })
  }

  public async upload(file: UploadedFile): Promise<string> {
    const { name, data, mimetype } = file

    const command = new PutObjectCommand({
      Bucket: envs.AWS_BUCKET_NAME,
      Key: name,
      Body: data,
      ContentType: mimetype,
    })

    await this.client.send(command)

    return `${envs.AWS_CLOUDFRONT_URL}/${name}`
  }

  public transform(file: UploadedFile, options: TransformDto): Promise<ImageEntity> {
    throw new Error('Method not implemented.')
  }
}
