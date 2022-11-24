const schedule= require("node-schedule");
const express = require("express");
// const clearDBLogs = require("./clearDBLogs");
const app = express();

schedule.scheduleJob("*/5 * * * * *", async () => {
  console.log("-----", `${new Date().getTime()}`);
  console.log("running a task every 5 seconds");
//   await clearDBLogs();
});

app.listen(3000, () => {
  console.log("Server Running at 3000");
});

// # ┌────────────── second (optional) (0-59)
// # │ ┌──────────── minute (0-59)
// # │ │ ┌────────── hour (0-23)
// # │ │ │ ┌──────── day of month (1-31)
// # │ │ │ │ ┌────── month (1-12 (or names))
// # │ │ │ │ │ ┌──── day of week (0-7 (or names, 0 or 7 are Sunday))
// # │ │ │ │ │ │
// # │ │ │ │ │ │
// # * * * * * *