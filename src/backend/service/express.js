const express = require("express");
const RoutesApp = require("./routes/indexRoutes");
const cors = require("cors");
const connectDB = require("../db/connectDB");
const app = express();
const port = 3001;

app.use(express.json());
app.use(cors());

RoutesApp(app);
connectDB();


app.listen(port, () => {
  console.log(`The service is working in the port ${port}`);
});