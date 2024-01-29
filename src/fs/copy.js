import fs from "fs";

const copy = async () => {
  const originalFilesPath = "src/fs/files";
  const newFilesPath = "src/fs/files_copy";

  if (!fs.existsSync(originalFilesPath) || fs.existsSync(newFilesPath)) {
    throw new Error("FS operation failed!");
  }

  fs.cp(originalFilesPath, newFilesPath, { recursive: true }, (err) => {
    if (err) throw err;
  });
};

try {
  await copy();
} catch (err) {
  console.error(err.message);
}
