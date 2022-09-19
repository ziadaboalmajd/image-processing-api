"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var logger_1 = __importDefault(require("./utilities/logger"));
var index_1 = __importDefault(require("./routes/index"));
var app = (0, express_1.default)();
var port = 3000;
app.use("/", express_1.default.static(__dirname + "/website"));
app.use("/api", logger_1.default, index_1.default);
// listen port
app.listen(port, function () {
    console.log("server started at localhost:".concat(port));
});
exports.default = app;
