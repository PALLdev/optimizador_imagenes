import fse from "fs-extra";
import sharp from "sharp";

import imagemin from "imagemin";
import imageminJpegtran from "imagemin-jpegtran";
import imageminPngquant from "imagemin-pngquant";
import imageminSvgo from "imagemin-svgo";
import imageminWebp from "imagemin-webp";
import imageminGifsicle from "imagemin-gifsicle";

const inputFolder = "src";
const outputFolder = "opt";
const targetWidth = 1920;

const processImages = async () => {
  try {
    const files = await fse.readdir(inputFolder);

    for (const file of files) {
      let inputPath = `${inputFolder}/${file}`;
      let outputPath = `${outputFolder}/${file}`;

      await sharp(inputPath).resize(targetWidth).toFile(outputPath);

      await imagemin([outputPath], {
        destination: outputFolder,
        plugins: [
          imageminJpegtran(),
          imageminPngquant({
            quality: [0.8, 0.9],
            strip: true,
          }),
          imageminSvgo(),
          imageminWebp({ quality: 90 }),
          imageminGifsicle(),
        ],
      });

      console.log(`Imagen: ${file} optimizada con exito`);
    }

    console.log("Proceso de optimización terminado con exito!!");
  } catch (error) {
    console.error(error);
  }
};

processImages();
