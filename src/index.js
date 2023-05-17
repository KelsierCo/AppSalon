const express = require("express");
const morgan = require("morgan");
const path = require("path");

const usuarioRoutes = require('./routes/usuarios.routes')

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(express.json());

app.use(usuarioRoutes)

app.use(express.static(path.join(__dirname, 'public')))

app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});