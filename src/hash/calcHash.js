import fs from "fs";
import { createHash } from "crypto";

const fileToCalculatePath = "src/hash/files/fileToCalculateHashFor.txt";

const calculateHash = async () => {
  const readableStream = fs.createReadStream(fileToCalculatePath);

  readableStream.on("data", function (chunk) {
    console.log(createHash("sha256").update(chunk).digest("hex"));
  });
};

await calculateHash();
