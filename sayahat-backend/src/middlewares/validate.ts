import { NextFunction, Request, Response } from "express";
import { Schema, ZodError } from "zod";

const validate =
  (schema: Schema) => (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);

      next();
    } catch (e) {
      if (e instanceof ZodError) {
        res.status(400).send(e.message);
      }
    }
  };

export { validate };
