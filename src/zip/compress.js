import fs from "fs";
import { createGzip } from "zlib";
import { pipeline } from "stream";

const compress = async () => {
  const gzip = createGzip();
  const source = fs.createReadStream("src/zip/files/fileToCompress.txt");
  const destination = fs.createWriteStream("src/zip/files/archive.gz");

  pipeline(source, gzip, destination, (err) => {
    if (err) {
      console.error("An error occurred:", err);
      process.exitCode = 1;
    }
  });
};

await compress();
