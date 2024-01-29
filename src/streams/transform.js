import { Transform } from "stream";

const transform = async () => {
  const transformStream = new Transform({
    transform(chunk, encoding, callback) {
      const reversedText = chunk.toString().split("").reverse().join("");

      callback(
        null,
        reversedText + "\n" + "To terminate it, use Ctrl+C combination" + "\n\n"
      );
    },
  });
  process.stdin.pipe(transformStream).pipe(process.stdout);
};

await transform();
