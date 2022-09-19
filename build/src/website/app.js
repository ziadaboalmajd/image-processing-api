"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/* Global Variables */
var wide = document.getElementById("wide");
var high = document.getElementById("high");
var uBtn = document.getElementById("upload");
var gBtn = document.getElementById("generate");
var imgSplash = document.getElementById("imgSdiv");
var entryCont = document.getElementById("entryCont");
var entryHolder = document.getElementById("entryHolder");
var imageDis = document.getElementById("displayimage");
var wideValue;
var highValue;
// hide splash img functions
setTimeout(function () {
    imgSplash.classList.add("splashHide");
}, 1000);
setTimeout(function () {
    imgSplash.style.display = "none";
}, 1700);
// main function
gBtn.addEventListener("click", newInput);
uBtn.addEventListener("change", function () {
    var reader = new FileReader();
    reader.addEventListener("load", function () {
        var uploaded_image = reader.result;
        // console.log(uploaded_image);
        imageDis.style.display = "block";
        imageDis.style.backgroundImage = "url(".concat(uploaded_image, ")");
    });
    reader.readAsDataURL(this.files[0]);
});
function newInput() {
    if (wide.value.length === 0) {
        wide.style.background = "rgb(238 174 202)";
        wide.style.color = "white";
        wide.style.borderColor = "rgb(238 174 202)";
        wide.setAttribute("placeholder", "Enter valid value");
        wide.disabled = true;
        setTimeout(function () {
            wide.style.background = "transparent";
            wide.style.color = "rgb(17, 38, 78)";
            wide.style.borderColor = " blanchedalmond";
            wide.setAttribute("placeholder", "pixels");
            wide.value = "";
            wide.disabled = false;
        }, 1000);
    }
    if (high.value.length === 0) {
        high.style.background = "rgb(238 174 202)";
        high.style.color = "white";
        high.style.borderColor = "rgb(238 174 202)";
        high.setAttribute("placeholder", "Enter valid value");
        high.disabled = true;
        setTimeout(function () {
            high.style.background = "transparent";
            high.style.color = "rgb(17, 38, 78)";
            high.style.borderColor = " blanchedalmond";
            high.setAttribute("placeholder", "pixels");
            high.value = "";
            high.disabled = false;
        }, 1000);
    }
    if (wide.value.length <= 5 &&
        wide.value != "" &&
        high.value.length <= 5 &&
        high.value != "" &&
        uBtn.value != "") {
        generateAction();
        deleteUI();
    }
}
function generateAction() {
    wideValue = wide.value;
    highValue = high.value;
    nameValue = uBtn.value.split("\\").pop();
    window.open(window.location.href + "api/?&filename=" + removeExtension(nameValue) + "&height=" + highValue + "&width=" + wideValue);
}
var deleteUI = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        wide.value = "";
        high.value = "";
        uBtn.value = "";
        imageDis.style.display = "none";
        return [2 /*return*/];
    });
}); };
function isNumber(et) {
    et = et ? et : window.event;
    var charCode = et.which ? et.which : et.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}
function removeExtension(filename) {
    return filename.substring(0, filename.lastIndexOf('.')) || filename;
}
