import fs from "fs";

import resize from "./resize";

function imageResize(
  respond: any,
  abltPath: string,
  iPath: string,
  namIn: string,
  higIn: number,
  widIn: number
) {
  //    erorr if there is wrong entry info
  if (
    Number(widIn) &&
    Number(higIn) &&
    Number(widIn).toString().length <= 3 &&
    Number(higIn).toString().length <= 3 &&
    fs.existsSync(abltPath) &&
    (widIn as number) % 1 === 0 &&
    (higIn as number) % 1 === 0
  ) {
    if (fs.existsSync(iPath)) {
      respond.sendFile(iPath);
    } else {
      resize.resizeImage(namIn, widIn as number, higIn as number);
      (function wait() {
        if ( fs.existsSync(iPath) ) {
          respond.sendFile(iPath);
        } else {
            setTimeout( wait, 50 );
        }
    })();
    }
  } else if (fs.existsSync(abltPath) === false) {
    respond.send(
      " Image is not in the project dictionary , use images in project folder  "
    );
  } else if (
    Number(widIn) &&
    Number(higIn) &&
    ((widIn as number) % 1 !== 0 || (higIn as number) % 1 !== 0)
  ) {
    respond.send(" Please insert whole number  ");
  } else if (isNaN(Number(widIn)) || isNaN(Number(higIn))) {
    respond.send(" Please insert valid pixels number  ");
  } else if (
    Number(widIn).toString().length > 3 ||
    Number(higIn).toString().length > 3
  ) {
    respond.send(
      " very large dimensions , Enter less width and height values "
    );
  } else {
    respond.send(" this photot is not supported or corrupted ");
  }
}

export default {
  imageResize,
};
