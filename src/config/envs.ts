import 'dotenv/config';
import { get } from 'env-var';


export const envs = {

  PORT: get('PORT').required().asPortNumber(),
  MONGO_URL: get('MONGO_URL').required().asString(),
  MONGO_DB_NAME: get('MONGO_DB_NAME').required().asString(),
  MONGO_DD_USER: get('MONGO_DD_USER').required().asString(),
  MONGO_DB_PASSWORD: get('MONGO_DB_PASSWORD').required().asString(),
  JWT_SEED: get('JWT_SEED').required().asString(),
  MAILER_SERVICE: get('MAILER_SERVICE').required().asString(),
  MAILER_EMAIL: get('MAILER_EMAIL').required().asString(),
  MAILER_SECRET_KEY: get('MAILER_SECRET_KEY').required().asString(),
  WEBSERVICES_URL: get('WEBSERVICES_URL').required().asString(),
  SEND_EMAIL: get('SEND_EMAIL').default('false').asBool()

}



