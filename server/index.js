const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");

const usuarioRoutes = require("./routes/usuarios.routes");
const loginRoutes = require("./routes/login.routes");
const decoracionRoutes = require("./routes/decoracion.routes");
const eventosRoutes = require('./routes/eventos.routes')
const DIRECTORIO_PERMITIDO = "http://localhost:3000";

const app = express();

app.set("port", process.env.PORT || 3001);

app.use(
  cors({
    origin: DIRECTORIO_PERMITIDO,
  })
);
app.use(morgan("dev"));
app.use(express.json());

app.use(usuarioRoutes);
app.use(loginRoutes);
app.use(decoracionRoutes);
app.use(eventosRoutes)

app.listen(app.get("port"), () => {
  console.log(`server on port ${app.get("port")}`);
});
