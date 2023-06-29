const express = require('express');
const bodyParser = require("body-parser");
const app = express();
app.use(express.json());
//app.use(cors());
app.use(bodyParser.json());
const port = 4500;

// API endpoint
app.post('/punjika', (req, res) => {
    // Handle API request
    const result=req.body
    //console.log(result)
    res.json( result );
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});