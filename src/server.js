import express from "express";
import 'dotenv/config';

const app = express()

// parsea el body para que sea undefined
app.use(express.json())

const PORT = process.env.PORT ||4004;

// API ROUTES
app.get('/api/healthy', (req, res) => {
    res.status(200).json({
        syccess: true,
        message: "server is healthy"
    })
})

app.use('/api', router)


dbConnection() // o por ejemplo appDataSource (como en typeorm)
    .then(() => {
        console.log("Database connected");

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        })
    })
    .catch(error => {
        console.log(error);
    })