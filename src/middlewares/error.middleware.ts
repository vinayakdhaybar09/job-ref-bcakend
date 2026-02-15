import { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/errors/ApiError";
import logger from "../utils/logger";

export const errorHandler = (err: unknown, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof ApiError) {
        logger.warn({ err }, `API Error: ${err.message}`);
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
            stack: process.env.NODE_ENV === "production" ? null : err.stack,
        });
    }

    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    logger.error({ err }, `Unhandled Error: ${err instanceof Error ? err.message : "Unknown"}`);

    res.status(statusCode);
    res.json({
        success: false,
        message: err instanceof Error ? err.message : "Internal Server Error",
        stack: process.env.NODE_ENV === "production" ? null : err instanceof Error ? err.stack : null,
    });
}