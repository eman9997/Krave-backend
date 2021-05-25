import express, {
    Request,
    Response,
    NextFunction,
    RequestHandler
} from "express";
import  {Sequelize}  from 'Sequelize';
import {createConnection, QueryError, RowDataPacket} from 'mysql2';
import data from './routes/data';

const sequelize = new Sequelize('test', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

const app = express();

app.use("/data", data)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
})
const port = 3000;

app.listen(port, () => {
    console.log(`running on port ${port}`)
})

