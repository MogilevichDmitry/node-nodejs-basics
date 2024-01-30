import fs from "fs";

const list = async () => {
  const filesPath = "src/fs/files";

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
