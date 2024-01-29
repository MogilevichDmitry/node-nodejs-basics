import fs from "fs";

const fileToReadPath = "src/fs/files/fileToRead.txt";

const read = async () => {
  if (!fs.existsSync(fileToReadPath)) {
    throw new Error("FS operation failed!");
  }

  fs.readFile(fileToReadPath, "utf8", (err, data) => {
    if (err) throw err;

    console.log(`File content:\n${data}`);
  });
};

try {
  await read();
} catch (err) {
  console.error(err.message);
}
