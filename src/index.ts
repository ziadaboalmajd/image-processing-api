import express from "express";

import logger from "./utilities/logger";

import routes from "./routes/index";



const app = express();

const port = 3000;

app.use("/", express.static(__dirname + "/website"));


app.use("/api", logger, routes );

// listen port
app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});

export default app;
