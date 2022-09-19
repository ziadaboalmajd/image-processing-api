import express from "express";

import path from "path";

import imageExist from "../../utilities/reddir";

const resizeApi = express.Router();

let imagePath;
let absoultePath;
let namInfo;
let higInfo;
let widInfo;
let queryString;
let urlParams;

resizeApi.get("/", (req: express.Request, res: express.Response) => {
  // varibles
  queryString = req.url;
  urlParams = new URLSearchParams(queryString);
  namInfo = urlParams.get("filename") as string;
  widInfo = urlParams.get("width") as unknown;
  higInfo = urlParams.get("height") as unknown;
  absoultePath = path.join(__dirname, "..", "..", "..", namInfo + ".jpg");
  imagePath = path.join(
    __dirname,
    "..", "..",
    "thumb",
    namInfo + "_" + Number(widInfo) + "_" + Number(higInfo) + ".jpg"
  );
  // main action
  imageExist.imageResize(
    res,
    absoultePath,
    imagePath,
    namInfo as string,
    higInfo as number,
    widInfo as number
  );
});

export default resizeApi;
