const express = require("express");
const app = express();
const tasks = require("./routes/task");
const connectDB = require("../starter/DB/connnect");
const notFound = require('./middleware/not-found')
 const errorHandlerMiddleware = require("./middleware/error")

require("dotenv").config()

// app.get("/hello", (res, req) => {
//   res.send("task manaer app");
// });
app.use(express.json());
app.use(express.static('./public'))
app.use("/api/v1/tasks", tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);
 

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);

    app.listen(port, console.log(`listenin on port ${port}`));
  } catch (error) {
    console.log(err);
  }
};

start();
