const app = require("./app");
const PORT = 5000;


process.on("uncaughtException", function (err) {
  process.exit(1)
});

process.on("unhandledRejection", function (err) {
  process.exit(1)
});

process.on("uncaughtExceptionMonitor",function(err){
  process.exit(1)
})

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`Server is running on port ${PORT}`);
  } else {
    console.log("Server can't start", error);
  }
});


