import fs from "fs";

const remove = async () => {
  const fileToRemovePath = "src/fs/files/fileToRemove.txt";

  if (!fs.existsSync(fileToRemovePath)) {
    throw new Error("FS operation failed!");
  }

  fs.unlink(fileToRemovePath, function (err) {
    if (err) throw err;
  });
};

try {
  await remove();
} catch (err) {
  console.error(err.message);
}
