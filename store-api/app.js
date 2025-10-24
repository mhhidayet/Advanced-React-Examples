const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const port = process.env.PORT || 5001; // Port 5000’e çekildi

const productsRoutes = require("./routes/products");
const cartsRoutes = require("./routes/carts");
const usersRoutes = require("./routes/users");
const ordersRoutes = require("./routes/orders");
const errorsRoutes = require("./routes/errors");

const { NotFoundError } = require("./util/errors");

const app = express();

// ---------------------- CORS ----------------------
const corsOptions = {
  origin: "http://localhost:3000", // frontend adresi
  credentials: true,               // cookie gönderimi için
};
app.use(cors(corsOptions));
app.options("*", cors(corsOptions)); // preflight isteklere izin

// ---------------------- Middleware ----------------------
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static("public"));

// ---------------------- Routes ----------------------
app.use("/products", productsRoutes);
app.use("/carts", cartsRoutes);
app.use("/users", usersRoutes);
app.use("/orders", ordersRoutes);
app.use("/errors", errorsRoutes);

// ---------------------- 404 Error ----------------------
app.use((req, res, next) => {
  const error = new NotFoundError("Not Found Error");
  error.status = 404;
  next(error);
});

// ---------------------- Error Handler ----------------------
// app.use((error, req, res, next) => {
//   const status = error.status || 500;
//   const message = error.message || "Something went wrong.";
//   const details = error.details;
//   const errors = error.errors;

//   res.status(status).json({ message, details, errors });
// });

// ---------------------- Server ----------------------
app.listen(port, () => {
  console.log(`API http://localhost:${port} üzerinde çalışıyor.`);
});
