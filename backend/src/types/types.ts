import { Request } from "express";

export type q = { page: string; limit: string };

export interface MyRequest extends Request {
  offset?: number;
  limit?: number;
  length?: number;
}
