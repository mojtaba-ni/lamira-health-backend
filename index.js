import express from "express"
import {config} from "dotenv"
import connectDb from "./config/dbConnection.js"
import cors from "cors"
import { verifyToken } from "./middleware/authMiddleware.js"
import { loginRoutes } from "./router/auth/route.js"
import { cowRoutes } from "./router/cow/route.js"
import { vaccineRoutes } from "./router/vaccine/route.js"
import { drugRoutes } from "./router/drug/route.js"




config()
connectDb()
const app = express()

//Middleware
app.use(cors())
app.use(express.json({ limit: '100mb' }))
app.use(express.urlencoded({extended:true}))



//Routes
app.use("/auth", loginRoutes);
app.use("/cow", cowRoutes);
app.use("/vaccine", vaccineRoutes);
app.use("/drug", drugRoutes);


//Check and install Python dependencies if needed
// if (!checkPythonDependencies()) {
//     installPythonDependencies();
// }

app.listen(process.env.PORT , () => {
    console.log("server Running");
})