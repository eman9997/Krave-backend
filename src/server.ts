import express, {
    Request,
    Response,
    NextFunction,
    RequestHandler
} from "express";
import data from './routes/data';
const { sequelize, User } = require('./models')
const app = express();
app.use(express.json())

main()
.then(data => console.log("Done!"))
.catch(err => console.error(err));

app.use("/data", data)

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err);
})
const port = 3000;

app.listen(port, () => {
    console.log(`running on port ${port}`)
})

app.listen({ port:5000 }, async() => {
    // Creates database tables based off the models we have.
    await sequelize.sync({ force: true })
    console.log("Database synced!")
})

async function
main():Promise<void> {
    // Creates database tables based off the models we have.
    console.log("Emanuel's mom!")
    try {
        return await sequelize.sync({ force: true })
    }
    catch(err) {
        return
    }
    console.log("Database synced!")
}