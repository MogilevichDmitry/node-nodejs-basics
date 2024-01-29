import fs from "fs";

const filesPath = "src/fs/files";

const list = async () => {
  if (!fs.existsSync(filesPath)) {
    throw new Error("FS operation failed!");
  }

  fs.readdir(filesPath, (err, files) => {
    if (err) throw err;

    console.log(files);
  });
};

try {
  await list();
} catch (err) {
  console.error(err.message);
}
