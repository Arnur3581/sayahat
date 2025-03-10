import { AuthService } from "./auth.service";

import { NextFunction, Request, Response } from "express";

const authService = new AuthService();

export class AuthController {
  async signup(req: Request, res: Response, next: NextFunction) {
    const { username, email, password } = req.body;

    try {
      const { accessToken, refreshToken } = await authService.signup(
        username,
        password,
        email
      );

      res.cookie("refresh-token", refreshToken, {
        // 20 days
        maxAge: 1000 * 60 * 60 * 24 * 20,
        sameSite: "lax",
      });

      res.status(201).send({
        "access-token": accessToken,
      });
    } catch (e) {
      next(e);
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    const { login, password } = req.body;

    try {
      const { accessToken, refreshToken } = await authService.login(
        login,
        password
      );

      res.cookie("refresh-token", refreshToken, {
        // 20 days
        maxAge: 1000 * 60 * 60 * 24 * 20,
        sameSite: "lax",
      });

      res.status(200).send({
        "access-token": accessToken,
      });
    } catch (e) {
      next(e);
    }
  }

  async logout(req: Request, res: Response, next: NextFunction) {
    const refreshToken = req.cookies["refresh-token"];

    try {
      if (!refreshToken) throw new Error();

      res.clearCookie("refresh-token", {
        maxAge: 1000 * 60 * 60 * 24 * 20,
        sameSite: "lax",
      });

      res.status(200).send({ message: "Logouted successfully" });
    } catch (e) {
      next(e);
    }
  }

  async refresh(req: Request, res: Response, next: NextFunction) {
    try {
      const refreshToken = req.cookies["refresh-token"];

      if (!refreshToken) throw new Error("No refresh token");
      const accessToken = authService.refresh(refreshToken);

      res.status(200).send({
        "access-token": accessToken,
      });
    } catch (e) {
      next(e);
    }
  }
}
