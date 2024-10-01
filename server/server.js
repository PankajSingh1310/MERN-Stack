require("dotenv").config();
const express = require("express");
const userRoute = require("./routes/userRoute");
const contactRoute = require("./routes/contactRoute");
const connectDB = require("./config/db");
const errorHandler = require("./middlewares/errorHandler");
const cors = require("cors");

const app = express();
connectDB().then(() => {
    console.log("Database connection successful");
})

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, PATCH, DELETE, HEAD",
    Credentials: true
};

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/user", userRoute);
app.use("/api/form", contactRoute);

app.use(errorHandler);

const port = process.env.PORT
app.listen(port, () => {
    console.log(`server is running on port 3000`);
})