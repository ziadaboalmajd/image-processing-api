"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var path_1 = __importDefault(require("path"));
var reddir_1 = __importDefault(require("../../utilities/reddir"));
var resizeApi = express_1.default.Router();
var imagePath;
var absoultePath;
var namInfo;
var higInfo;
var widInfo;
var queryString;
var urlParams;
resizeApi.get("/", function (req, res) {
    // varibles
    queryString = req.url;
    urlParams = new URLSearchParams(queryString);
    namInfo = urlParams.get("filename");
    widInfo = urlParams.get("width");
    higInfo = urlParams.get("height");
    absoultePath = path_1.default.join(__dirname, "..", "..", "..", namInfo + ".jpg");
    imagePath = path_1.default.join(__dirname, "..", "..", "thumb", namInfo + "_" + Number(widInfo) + "_" + Number(higInfo) + ".jpg");
    // main action
    reddir_1.default.imageResize(res, absoultePath, imagePath, namInfo, higInfo, widInfo);
});
exports.default = resizeApi;
