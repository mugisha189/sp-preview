export type ActivityStatus =
  | "Completed"
  | "Pending"
  | "Current week"
  | "Upcoming";

export type Activity = {
  id: string;
  week: string;
  period: string;
  status: ActivityStatus;
  progress: string;
};

export type DayStatus = "Completed" | "Missed" | "Current day" | "Upcoming";

export type Day = {
  id: string;
  day: string;
  date: string;
  status: DayStatus;
  activities: string;
};

export type WeekDetails = {
  [key: string]: {
    title: string;
    subtitle: string;
    days: Day[];
  };
};

export type TaskStatus = "Reported" | "Pending";

export type Task = {
  id: string;
  title: string;
  status: TaskStatus;
};

export type DayDetails = {
  [key: string]: {
    day: string;
    date: string;
    tasks: Task[];
  };
};
