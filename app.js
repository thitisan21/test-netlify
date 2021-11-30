require("dotenv").config({ path: `./.env` });
const express = require("express");
const serverless = require("serverless-http");
const app = express();
const router = require("./routes/routeIndex");

// app.use(express.json({ limit: "50mb" }))
// app.use("/", router)

app.get("/test", (req, res) => {
  res.send("test");
});

// app.listen( process.env.EXPRESS_PORT || 3000, async () => {
//     console.log(`App listening on port ${process.env.EXPRESS_PORT}`)
// })
var port = process.env.EXPRESS_PORT || 3000;

// app.listen(port, () => {
//     console.log("application is listening on:", port);
//  });
app.use("/.netlify/functions/server", router); // path must route to lambda (express/server.js)
app.listen(port, function () {
  console.log(`Server started on port ${port}...`);
});

module.exports = app;
module.exports.handler = serverless(app);
