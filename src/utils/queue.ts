import PQueue from 'p-queue';
import { ISingleBar, singleBar } from './bars';

const DEFAULT_CONCURRENCY = 3;

export interface IRunQueueCtor<T, R> {
  taskName: string;
  items: Array<T>;
  concurrency?: number;
  defaultHandledItems?: number;
  handleItem: (item: T) => Promise<R>;
}

export const runQueue = <T, R>({
  taskName,
  items,
  handleItem,
  concurrency = DEFAULT_CONCURRENCY,
  defaultHandledItems = 0,
}: IRunQueueCtor<T, R>) => {
  const bar = singleBar({
    name: taskName,
    totalTasks: items.length,
    handledTasksOnStart: defaultHandledItems,
  });

  return queue({
    bar,
    concurrency,
    tasks: items.map((item) => async () => handleItem(item))
  });
}

interface IQueueCtor<T> {
  bar: ISingleBar;
  tasks: Array<() => Promise<T>>;
  concurrency?: number;
}

async function queue<T>({
  bar,
  tasks,
  concurrency = DEFAULT_CONCURRENCY,
}: IQueueCtor<T>) {
  const queue = new PQueue({ concurrency })
    .on('next', bar.increment);

  let result = await queue.addAll(tasks);
  await queue.onIdle();
  bar.done();

  return result;
}
