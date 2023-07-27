function countWhere<T>(arr: T[], callback: (val: T) => boolean) {
  return arr.reduce((count: number, cv: T) => count + +callback(cv), 0);
}

enum JobState {
  Queued,
  Running,
  Finished,
}

const Progress = ({ jobs }: ProgressProps) => {
  const 

  const queued = countWhere(jobs, (j) => j.state === JobState.Queued);
  const inProgress = countWhere(jobs, (j) => j.state === JobState.Running);
  <p>{}</p>;
};

type Job = {
  state: JobState;
  duration: number;
};

type ProgressProps = {
  jobs: Job[];
};

export default Progress;