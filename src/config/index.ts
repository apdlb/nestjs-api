export const getMongooseUri = (): string => {
  // Conexión DB
  let dbString = 'mongodb://';

  if (process.env.DB_USER) {
    dbString = `${dbString}${process.env.DB_USER}`;
  }
  if (process.env.DB_PASSWORD) {
    dbString = `${dbString}:${process.env.DB_PASSWORD}`;
  }
  if (process.env.DB_HOST) {
    dbString = `${dbString}${process.env.DB_HOST}`;
  }
  if (process.env.DB_PORT) {
    dbString = `${dbString}:${process.env.DB_PORT}`;
  }
  if (process.env.DB_NAME) {
    dbString = `${dbString}/${process.env.DB_NAME}`;
  }

  return dbString;
};
