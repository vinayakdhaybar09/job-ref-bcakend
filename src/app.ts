import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import { errorHandler } from './middlewares/error.middleware';

const app: Express = express();

app.use(helmet());
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser());

app.get("/health", (req: Request, res: Response) => {
    res.json({ message: "OK" });
})

app.use(errorHandler)

export default app;
