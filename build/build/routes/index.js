"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var rout1_1 = __importDefault(require("./api/rout1"));
var rout2_1 = __importDefault(require("./api/rout2"));
var routes = express_1.default.Router();
routes.get('/', function (req, res) {
    res.send("hello main api");
});
routes.use('/route1', rout1_1.default);
routes.use('/route2', rout2_1.default);
exports.default = routes;
