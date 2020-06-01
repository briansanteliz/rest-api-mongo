"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));

var _express = _interopRequireDefault(require("express"));

var _index = _interopRequireDefault(require("./routes/index"));

var _task = _interopRequireDefault(require("./routes/task"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); //Settings

app.set('port', process.env.PORT || 3000);

_dotenv["default"].config(); //middlewares


app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
})); //routes

app.use(_index["default"]);
app.use('/tareas', _task["default"]);
module.exports = app;