import sharp from "sharp";

import path from "path";

// resize with sharp function

async function resizeImage(iname: string, iwide: number, ihigh: number) {
  try {
    await sharp(iname + ".jpg")
      .resize({
        width: Number(iwide),
        height: Number(ihigh),
        fit: sharp.fit.cover,
        position: "centre",
      })
      .toFile(
        path.join(
          __dirname,
          "..",
          "thumb",
          iname + "_" + Number(iwide) + "_" + Number(ihigh) + ".jpg"
        )
      );
  } catch (error) {
    console.log(error);
  }
}

export default {
  resizeImage,
};
