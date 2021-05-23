import express, {
    Request,
    Response,
    NextFunction,
    RequestHandler
} from "express";
import data from './routes/data';

const app = express();

app.use("/data", data)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
})
const port = 3000;

app.listen(port, () => {
    console.log(`running on port ${port}`)
})

