import { Response, NextFunction } from "express";

import client from "../database/database";

import { MyRequest, q } from "../types/types";
import { TABLE_LIMIT } from "../config/config";

type MiddlewareFunction = (
  req: MyRequest,
  res: Response,
  next: NextFunction
) => void;

export const limitMiddlewarePost: MiddlewareFunction = async (
  req,
  res,
  next
) => {
  const { rows } = await client.query("SELECT COUNT(*) FROM estates");
  const rowCount = rows[0].count;

  if (TABLE_LIMIT > rowCount) {
    next();
  }
};

export const limitMiddlewareGet: MiddlewareFunction = async (
  req,
  res,
  next
) => {
  const { rows } = await client.query("SELECT COUNT(*) FROM estates");
  const rowCount = rows[0].count;

  if (TABLE_LIMIT > rowCount) {
    return limitMiddlewareGet(req, res, next);
  }

  req.length = rowCount;
  next();
};

export const paginationMiddleware: MiddlewareFunction = async (
  req,
  res,
  next
) => {
  const { page, limit } = req.query.q as q;
  const offset = (+page - 1) * +limit;

  req.offset = offset;
  req.limit = +limit;
  next();
};
