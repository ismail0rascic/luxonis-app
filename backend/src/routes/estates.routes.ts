import express from "express";

import { getEstates, insertEstates } from "../controllers/estates.controller";
import {
  limitMiddlewareGet,
  limitMiddlewarePost,
  paginationMiddleware,
} from "../middlewares/estate.middleware";

const router = express.Router();
router
  .route("/api/estates")
  .get(limitMiddlewareGet, paginationMiddleware, getEstates);
router.route("/api/estates").post(limitMiddlewarePost, insertEstates);

export default router;
