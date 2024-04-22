const express = require("express")
const app = express()
const port = 3000
const path = require("path")


//db
const conn = require("./db/conn");

conn();

//routes

app.use(express.json());

const routes = require("./routes/user");

app.use("/api", routes);

app.use(express.static(path.join(__dirname, '../view')));

app.listen(port, () => {
    console.log(`app rodando em http:localhost:${port}`)
})




// mIdYV9w1yGuqMUmC
