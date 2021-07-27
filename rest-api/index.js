const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');

const app = express();
dotenv.config();
const MONGO_URL = "mongodb+srv://ayushagrawal:uEILaPzZiFrENDJW@cluster0.mrhd3.mongodb.net/userdb?retryWrites=true&w=majority";

mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set('useCreateIndex', true);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});
// middlewares

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.get("/", (req, res) => {
    res.send("homepage");
})

app.listen(3000, () => {
    console.log("listening on port 3000");
})

// uEILaPzZiFrENDJW