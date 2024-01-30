const parseArgs = () => {
  process.argv.forEach((value, index, array) => {
    if (value.startsWith("--")) {
      console.log(`${value.slice(2)} is ${array[index + 1]}`);
    }
  });
};

parseArgs();
