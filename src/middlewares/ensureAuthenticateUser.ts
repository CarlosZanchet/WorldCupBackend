// VALIDA TOKEN

import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export async function ensureAuthenticateClient(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization;

  if(!authHeader) {
    return response.status(401).json({
      message: 'Token missing'
    })
  }

  const [, token] = authHeader.split(" ")

  try {
    const ola = verify(token, 'd9452db98c065e8964ebd1c489ad3be1');

    console.log(ola)

    return next();
  } catch (err) {
    return response.status(401).json({
      message: 'Invalid token'
    }) 
  }
}