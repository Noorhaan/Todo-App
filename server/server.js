require('dotenv').config();
const express = require("express");
const router= require("./routes/")
const app = express();
const PORT = process.env.PORT 
const cors = require("cors");
app.use(express.json());
app.use(cors({origin: process.env.ORIGIN_URL}))
app.use(router)

//routes
app.listen(PORT, () => console.log("server is running up"));
