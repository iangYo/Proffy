import { Request, Response, NextFunction } from 'express';
import db from '../database/connection';

export default class ConnectionController {
  async index(req: Request, res: Response, next: NextFunction) {
    const totalConnection = await db('connections').count('* as total');

    const { total } = totalConnection[0];

    return res.json({ total });
  }

  async create(req: Request, res: Response, next: NextFunction) {
    const { user_id } = req.body;

    await db('connections').insert({ user_id });

    return res.status(201).send();
  }
}
