import { IEnvVars } from "../models/env-vars";
import dotenv from "dotenv";
import { ServerModes } from "../common/enums";

dotenv.config();

export const Environment: IEnvVars = {
  DB_USER: process.env.DB_USER,
  DB_PASS: process.env.DB_PASS,
  DB_NAME: process.env.DB_NAME,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: Number(process.env.DB_PORT),
  DB_ENABLE_QUERY_LOGGING: Number(process.env.DB_ENABLE_QUERY_LOGGING) == 1,

  PORT: Number(process.env.PORT),

  ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS.split(","),

  HTTP_PROXY: process.env.HTTP_PROXY,
  HTTPS_PROXY: process.env.HTTPS_PROXY,
  NO_PROXY: process.env.NO_PROXY,

  SERVER_MODE: Number(process.env.SERVER_MODE) as ServerModes,

  SALT: Number(process.env.SALT),

  MAX_REQUEST: Number(process.env.MAX_REQUEST),
  WINDOW_MINUTES: Number(process.env.WINDOW_MINUTES),

  JWT_KEY: process.env.JWT_KEY,
  JWT_ISSUER: process.env.JWT_ISSUER,
  JWT_AUDIENCE: process.env.JWT_AUDIENCE,
  JWT_ALGORITHMS: process.env.JWT_ALGORITHMS.split(','),
  AUTH_SCHEMA: process.env.AUTH_SCHEMA,
  AUTH_SESSION_EXP_TIME: process.env.AUTH_SESSION_EXP_TIME,
  AUTH_REFRESH_SESSION_EXP_TIME: process.env.AUTH_REFRESH_SESSION_EXP_TIME,

  MAX_IMG_HEIGHT: Number(process.env.MAX_IMG_HEIGHT),
  DEFAULT_IMAGE_NAME: process.env.DEFAULT_IMAGE_NAME,
  ALLOWED_MIME_TYPES: process.env.ALLOWED_MIME_TYPES.split(','),
  MAX_FILE_SIZE_IN_MB: Number(process.env.MAX_FILE_SIZE_IN_MB)
};