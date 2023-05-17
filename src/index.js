const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");

const usuarioRoutes = require("./routes/usuarios.routes");

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use(usuarioRoutes);

app.listen(app.get("port"), () => {
  console.log(`server on port ${app.get("port")}`);
});
