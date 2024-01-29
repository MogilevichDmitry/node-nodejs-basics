import fs from "fs";

const fileToReadPath = "src/streams/files/fileToRead.txt";

const read = async () => {
  const readableStream = fs.createReadStream(fileToReadPath);

  readableStream.on("data", function (chunk) {
    process.stdout.write(chunk);
  });
};

await read();
