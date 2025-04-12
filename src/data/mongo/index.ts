import mongoose from 'mongoose'

interface ConnectionOptions {
  mongoUrl: string
  dbName: string
}

export class MongoDatabase {
  public static async connect(options: ConnectionOptions) {
    const { mongoUrl, dbName } = options

    try {
      await mongoose.connect(mongoUrl, {
        dbName,
      })

      console.log('Mongo connected')
    } catch (error) {
      console.log('Mongo connection error')
      throw error
    }
  }

  public static async disconnect() {
    await mongoose.disconnect()
  }
}
