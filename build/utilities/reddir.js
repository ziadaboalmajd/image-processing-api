"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var resize_1 = __importDefault(require("./resize"));
function imageResize(respond, abltPath, iPath, namIn, higIn, widIn) {
    //    erorr if there is wrong entry info
    if (Number(widIn) &&
        Number(higIn) &&
        Number(widIn).toString().length <= 3 &&
        Number(higIn).toString().length <= 3 &&
        fs_1.default.existsSync(abltPath) &&
        widIn % 1 === 0 &&
        higIn % 1 === 0) {
        if (fs_1.default.existsSync(iPath)) {
            respond.sendFile(iPath);
        }
        else {
            resize_1.default.resizeImage(namIn, widIn, higIn);
            (function wait() {
                if (fs_1.default.existsSync(iPath)) {
                    respond.sendFile(iPath);
                }
                else {
                    setTimeout(wait, 50);
                }
            })();
        }
    }
    else if (fs_1.default.existsSync(abltPath) === false) {
        respond.send(" Image is not in the project dictionary , use images in project folder  ");
    }
    else if (Number(widIn) &&
        Number(higIn) &&
        (widIn % 1 !== 0 || higIn % 1 !== 0)) {
        respond.send(" Please insert whole number  ");
    }
    else if (isNaN(Number(widIn)) || isNaN(Number(higIn))) {
        respond.send(" Please insert valid pixels number  ");
    }
    else if (Number(widIn).toString().length > 3 ||
        Number(higIn).toString().length > 3) {
        respond.send(" very large dimensions , Enter less width and height values ");
    }
    else {
        respond.send(" this photot is not supported or corrupted ");
    }
}
exports.default = {
    imageResize: imageResize,
};
