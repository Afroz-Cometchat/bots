const express = require('express');
const cors = require("cors");
const app = express();
const PORT = "8080"
app.use(express.json());
app.use(cors());

app.post("/bot", (req, res) => {
    const {body} = req;
    try {
        console.log(body);
        res.status(200).json({
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: "server erro something went wrong",
            error
        })
    }
})

app.listen(PORT, () => {
    console.log("server runnig on port", PORT);
})