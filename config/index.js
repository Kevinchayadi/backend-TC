require('dotenv').config();

module.exports = {
  app: {
    port: process.env.SERVER_PORT || 5000,
    env: process.env.NODE_ENV || 'development',
  },
  db: {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT || 'postgres',
    port: process.env.DB_PORT || 5432,
    name: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  google: {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackUrl: process.env.GOOGLE_CLIENT_CALLBACK,
  },
  storage: {
    path: process.env.FILE_STORAGE_PATH || 'uploads',
  }
}
