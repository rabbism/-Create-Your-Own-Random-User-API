const { application } = require("express");
const express = require("express");

const app = express();
app.get("/", (req, res) => { 
    res.send('server start')
}
)

app.listen(5000, function () {
    console.log('sever start');
})