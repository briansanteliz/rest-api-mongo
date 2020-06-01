"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _task = require("../controllers/task");

var router = (0, _express.Router)();
router.get('/', _task.get);
router.post('/', _task.post);
router.get('/:nombre', _task.getOne);
router.put('/:nombre', _task.put);
router["delete"]('/:nombre', _task.dele);
var _default = router;
exports["default"] = _default;