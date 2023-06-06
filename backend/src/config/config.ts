import dotenv from "dotenv";
dotenv.config();

export const port = process.env.PORT;
export const API_URL = "https://www.sreality.cz/api/cs/v2/estates";
export const BASE_URL = process.env.BASE_URL;

export const TABLE_LIMIT = 500;
export const PAGES_LIMIT = 500;
