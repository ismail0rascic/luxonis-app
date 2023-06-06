import { Request, Response } from "express";
import client from "../database/database";
import { MyRequest } from "../types/types";

export const insertEstates = async (req: Request, res: Response) => {
  try {
    const { title, location, price, images } = req.body;    
    const values = [title, location, price, images];

    const query =
      "INSERT INTO estates (title, location, price, images) VALUES ($1, $2, $3, $4)";
    await client.query(query, values);

    return res.sendStatus(200);
  } catch (err) {
    return res.sendStatus(500);
  }
};

export const getEstates = async (
  req: MyRequest,
  res: Response
): Promise<Response> => {
  try {
    const { rows } = await client.query(
      `SELECT * FROM estates LIMIT ${req.limit} OFFSET ${req.offset}`
    );

    return res.send({ data: rows, length: req.length });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).send("Internal Server Error");
  }
};
