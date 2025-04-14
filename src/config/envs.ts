import 'dotenv/config'
import * as env from 'env-var'

export const envs = {
  PORT: env.get('PORT').required().asPortNumber(),
  JWT_SEED: env.get('JWT_SEED').required().asString(),
  MONGO_URL: env.get('MONGO_URL').required().asString(),
  MONGO_DB_NAME: env.get('MONGO_DB_NAME').required().asString(),
  MONGO_USER: env.get('MONGO_USER').required().asString(),
  MONGO_PASS: env.get('MONGO_PASS').required().asString(),
  AWS_BUCKET_NAME: env.get('AWS_BUCKET_NAME').required().asString(),
  AWS_BUCKET_REGION: env.get('AWS_BUCKET_REGION').required().asString(),
  AWS_PUBLIC_KEY: env.get('AWS_PUBLIC_KEY').required().asString(),
  AWS_SECRET_KEY: env.get('AWS_SECRET_KEY').required().asString(),
  AWS_CLOUDFRONT_URL: env.get('AWS_CLOUDFRONT_URL').required().asString(),
}
