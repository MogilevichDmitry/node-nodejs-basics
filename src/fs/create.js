import fs from "fs";

const filePath = "src/fs/files/fresh.txt";

const create = async () => {
  if (fs.existsSync(filePath)) {
    throw new Error("FS operation failed!");
  }

  fs.appendFile(filePath, "I am fresh and young", function (err) {
    if (err) throw err;
  });
};

try {
  await create();
} catch (err) {
  console.error(err.message);
}
