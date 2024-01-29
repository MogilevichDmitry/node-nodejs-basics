import fs from "fs";

const oldPath = "src/fs/files/wrongFilename.txt";
const newPath = "src/fs/files/properFilename.md";

const rename = async () => {
  if (!fs.existsSync(oldPath) || fs.existsSync(newPath)) {
    throw new Error("FS operation failed!");
  }

  fs.rename(oldPath, newPath, function (err) {
    if (err) throw err;
  });
};

try {
  await rename();
} catch (err) {
  console.error(err.message);
}
