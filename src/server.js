import express from "express";
import 'dotenv/config';
import { dbConnection } from "./database/db.js";
import router from "./routes/router.js";

const app = express()

// parsea el body para que sea undefined
app.use(express.json())

const PORT = process.env.PORT ||4004;

// API ROUTES
app.get('/api/healthy', (req, res) => {
  res.status(200).json(
    {
      success: true,
      message: "server is healthy"
    }
  )
})

app.use('/api', router)

dbConnection()
.then(() =>{
  console.log("Database connected");
  app.listen(PORT, () => {
    console.log(`Server running o port ${PORT}`);
  })
})
.catch(error => {
  console.log(error);
})