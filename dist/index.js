"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sayHello = void 0;
const express_1 = __importDefault(require("express"));
const utils_1 = require("./utils");
const app = express_1.default();
exports.sayHello = (req, res) => {
    res.status(200).json({
        message: utils_1.getHelloMessage(),
        uptime: process.uptime()
    });
};
app.use('/', exports.sayHello);
const port = 3001;
app.listen(port, () => {
    console.log('🚀 Running at localhost:3001');
});
