const app = require("express")();
const bodyParser = require("body-parser");
const cors = require("cors");

// Express middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Route middlewares
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const bookRoute = require("./routes/book");

app.use("/auth", authRoute);
app.use("/user", userRoute);
app.use("/book", bookRoute);

app.listen(process.env.SERVER_PORT, () =>
  console.log(`Server listening on ${process.env.SERVER_PORT}`)
);
