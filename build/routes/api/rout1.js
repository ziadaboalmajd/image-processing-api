"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var rotOne = express_1.default.Router();
rotOne.get('/', function (req, res) {
    res.send("hello first api");
});
exports.default = rotOne;
