import { Worker, isMainThread } from "worker_threads";
import os from "os";

const performCalculations = async () => {
  if (isMainThread) {
    const numCores = os.cpus().length;
    const workers = [];

    const results = [];

    const createWorker = (data) => {
      return new Promise((resolve) => {
        const worker = new Worker("./src/wt/worker.js", {
          workerData: data,
        });

        worker.on("message", (message) => {
          results.push(message);

          if (results.length === numCores) {
            console.log(results);
            resolve();
          }
        });
      });
    };

    const startWorkers = async () => {
      for (let i = 0; i < numCores; i++) {
        const data = 10 + i;
        workers.push(createWorker(data));
      }

      await Promise.all(workers);
    };

    await startWorkers();
  }
};

await performCalculations();
