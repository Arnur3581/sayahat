import dotenv from "dotenv";
dotenv.config();

export const PORT: string = process.env.PORT as string;
export const DB_URI: string = process.env.DB_URI as string;
export const ACCESS_TOKEN_SECRET: string = process.env.ACCESS_SECRET as string;
export const REFRESH_TOKEN_SECRET: string = process.env
  .REFRESH_SECRET as string;
