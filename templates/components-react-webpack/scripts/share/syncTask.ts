/**
 * exec async task by order.
 *
 * @author tangjiahui
 * @date 2024/4/2
 */
type AsyncFunc = () => Promise<any>;

async function syncTask(...args: AsyncFunc[][]): Promise<void>;
async function syncTask(...args: AsyncFunc[]): Promise<void>;
async function syncTask(...args: AsyncFunc[] | AsyncFunc[][]): Promise<void> {
  return new Promise((resolve, reject) => {
    const tasks: AsyncFunc[] = args.flat(Infinity) as AsyncFunc[];
    let i = 0;

    (function run() {
      if (i > tasks.length - 1) {
        resolve();
        return;
      }
      const task = tasks[i++];
      const taskResult = task();
      taskResult.then(run).catch(reject);
    })();
  });
}

export { syncTask };
