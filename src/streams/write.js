import fs from "fs";

const write = async () => {
  const fileToWritePath = "src/streams/files/fileToWrite.txt";
  const file = fs.createWriteStream(fileToWritePath);

  process.stdin.on("data", (data) => {
    file.write(data);
    process.exit();
  });
};

await write();
