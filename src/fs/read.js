import fs from "fs";

const read = async () => {
  const fileToReadPath = "src/fs/files/fileToRead.txt";

  if (!fs.existsSync(fileToReadPath)) {
    throw new Error("FS operation failed!");
  }

  fs.readFile(fileToReadPath, "utf8", (err, data) => {
    if (err) throw err;

    console.log(data);
  });
};

try {
  await read();
} catch (err) {
  console.error(err.message);
}
