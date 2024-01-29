import fs from "fs";

const fileToWritePath = "src/streams/files/fileToWrite.txt";

const write = async () => {
  const file = fs.createWriteStream(fileToWritePath);

  process.stdin.on("data", (data) => {
    file.write(data);
    process.exit();
  });
};

await write();
