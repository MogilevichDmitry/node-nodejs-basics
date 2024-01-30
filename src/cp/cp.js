import { spawn } from "child_process";

const spawnChildProcess = async (args) => {
  const childProcess = spawn("node", ["src/cp/files/script.js", ...args], {
    stdio: ["pipe", "pipe", "ipc"],
  });

  process.stdin.on("data", (data) => {
    childProcess.stdin.write(data);
  });

  childProcess.stdout.on("data", (data) => {
    process.stdout.write(data);
  });
};

spawnChildProcess(["somearg", "one-more-arg", "more-more-and-more"]);
