import { ServerModes } from "../common/enums";

export interface IEnvVars {
  DB_USER: string;
  DB_PASS: string;
  DB_NAME: string;
  DB_HOST: string;
  DB_PORT: number;
  DB_ENABLE_QUERY_LOGGING: boolean;
  PORT: number;
  ALLOWED_ORIGINS: string[];
  HTTP_PROXY: string;
  HTTPS_PROXY: string;
  NO_PROXY: string;
  SERVER_MODE: ServerModes;
  SALT: number;
  MAX_REQUEST: number;
  WINDOW_MINUTES: number;
  JWT_KEY: string;
  JWT_ISSUER: string;
  JWT_AUDIENCE: string;
  JWT_ALGORITHMS: string[];
  AUTH_SCHEMA: string;
  AUTH_SESSION_EXP_TIME: string;
  AUTH_REFRESH_SESSION_EXP_TIME: string;
  MAX_IMG_HEIGHT: number;
  DEFAULT_IMAGE_NAME: string;
  ALLOWED_MIME_TYPES: string[];
  MAX_FILE_SIZE_IN_MB: number;
}