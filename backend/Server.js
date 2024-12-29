// Import packages

const express = require("express");
const connectNormal = require("./db/connect")
const AsyncConnectDB = require("./db/AsyncAwaitConnect");
const connectDBAsyncNormal = require("./db/NormalConnect")
const ConnectUsingPromises = require("./db/PromisesConnect")
const router = require("./router/Routes")

const app = express();

// This all are the connection to the MongoDB Database 
connectNormal();
AsyncConnectDB();
connectDBAsyncNormal();
ConnectUsingPromises();



// // Define a basic route
// app.get('/', (req, res) => {
//     res.send("Hello, this is me!");
// });

app.use("/api/auth",router)

// Set the port and start the server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
