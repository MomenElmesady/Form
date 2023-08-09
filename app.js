`use strict`
const express = require('express');
const { read } = require('fs');
const port = process.env.PORT || 5000;

const app = express();
app.use(express.json())
app.use(express.urlencoded())
app.use(express.static("public"))
const path = require('path');

app.get("/form", (req, res) => {
    res.sendFile(path.join(__dirname, "project.html"))
})

app.post("/formPost", (req, res) => {
    console.log(req.body); 
    if (req.body.agree === "yes") {
        res.send("<h1 style='text-align: center; color: green; border: 2px solid black;'> Form submitted successfully</h1>")

    } 
    else 
    {
        res.sendFile(path.join(__dirname, "error.html"))

    }
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`)
})

