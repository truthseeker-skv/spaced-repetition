import { SingleBar } from 'cli-progress';

export interface ISingleBarCtor {
  name: string,
  totalTasks: number,
  handledTasksOnStart?: number,
}

export interface ISingleBar {
  increment(): void;
  done(): void;
}

export const singleBar = ({
  name,
  totalTasks,
  handledTasksOnStart = 0,
}: ISingleBarCtor): ISingleBar => {
  const taskName = name.padEnd(40, ' ');

  const sb = new SingleBar({
    hideCursor: true,
    format: `${taskName} [{bar}] {percentage}% | ETA: {eta}s | {value}/{total}`,
  });

  sb.start(totalTasks, handledTasksOnStart);

  const done = () => {
    sb.update(sb.getTotal());
    sb.stop();
  };

  return {
    increment: () => sb.increment(),
    done,
  };
};
