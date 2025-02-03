import express from "express";
import bodyParser from "body-parser";
import questionsRoute from "./routes/questions-route.js";
import "dotenv/config"

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", questionsRoute.router);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});