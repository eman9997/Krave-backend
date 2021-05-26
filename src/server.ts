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


app.post('/users', async(req, res) => {
    const { name, email, role } = req.body

    try {
        const user = await User.create({ name, email, role })
        return res.json(user)
    } 
    catch(err) {
        console.log(err)
        return res.status(500).json(err)
    }
})



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