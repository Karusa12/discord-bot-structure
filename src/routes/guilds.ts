import { Router, Request, Response } from 'express';
import client from '../bot';

const guilds_route = Router();

guilds_route.get('/', (req: Request, res: Response) => {
    if (!client.isReady()) {
        return res.status(503).json({ error: 'Client not ready' });
    }

    const guilds = client.guilds.cache.map(guild => guild.name);
    res.json(guilds);
});

export default guilds_route;