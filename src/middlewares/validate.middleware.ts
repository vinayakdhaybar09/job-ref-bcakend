import { ZodObject, ZodError } from "zod";
import { Request, Response, NextFunction } from "express";
import { ApiError } from "../utils/errors/ApiError";

export const validate = (schema: ZodObject) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        await schema.parseAsync({
            body: req.body,
            query: req.query,
            params: req.params,
        });
        next();
    } catch (error) {
        if (error instanceof ZodError) {
            const errorMessage = error.issues.map((issue) => `${issue.path.join('.')}: ${issue.message}`).join(', ');
            next(new ApiError(errorMessage, 400));
        } else {
            next(error);
        }
    }
};
