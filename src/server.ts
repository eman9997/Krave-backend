import express, {
    Request,
    Response,
    NextFunction,
    RequestHandler
} from "express";
const { sequelize } = require('./models')
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



async function 
main() {
    console.log("hello")
    // Creates database tables based off the models we have.
    await sequelize.sync()
}
main();