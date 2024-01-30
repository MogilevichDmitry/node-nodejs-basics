import fs from "fs";

const read = async () => {
  const fileToReadPath = "src/streams/files/fileToRead.txt";
  const readableStream = fs.createReadStream(fileToReadPath);

  readableStream.on("data", function (chunk) {
    process.stdout.write(chunk);
  });
};

await read();
