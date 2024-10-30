import client from './bot';
import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import guilds_route from './routes/guilds';

const app: Express = express();

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    exposedHeaders: ['Access-Control-Allow-Origin'],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
    res.send(`Hello, I am ${client.user?.username}`);
});

app.use('/guilds', guilds_route);

export default app;