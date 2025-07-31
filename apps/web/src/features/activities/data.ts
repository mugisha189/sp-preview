import { Activity, DayDetails, WeekDetails } from "./types";

export const activities: Activity[] = [
  {
    week: "Week 1",
    period: "12 May 2024 - 17 May 2024",
    status: "Completed",
    progress: "4 new Activities",
    id: "1",
  },
  {
    week: "Week 2",
    period: "12 May 2024 - 17 May 2024",
    status: "Pending",
    progress: "2 days unreported",
    id: "2",
  },
  {
    week: "Week 3",
    period: "12 May 2024 - 17 May 2024",
    status: "Completed",
    progress: "No activities",
    id: "3",
  },
  {
    week: "Week 4",
    period: "12 May 2024 - 17 May 2024",
    status: "Current week",
    progress: "No activities",
    id: "4",
  },
  {
    week: "Week 5",
    period: "12 May 2024 - 17 May 2024",
    status: "Upcoming",
    progress: "All activities reported",
    id: "5",
  },
  {
    week: "Week 6",
    period: "12 May 2024 - 17 May 2024",
    status: "Upcoming",
    progress: "5 days unreported",
    id: "6",
  },
  {
    week: "Week 7",
    period: "12 May 2024 - 17 May 2024",
    status: "Completed",
    progress: "4 new Activities",
    id: "7",
  },
  {
    week: "Week 8",
    period: "12 May 2024 - 17 May 2024",
    status: "Pending",
    progress: "2 days unreported",
    id: "8",
  },
  {
    week: "Week 9",
    period: "12 May 2024 - 17 May 2024",
    status: "Completed",
    progress: "No activities",
    id: "9",
  },
  {
    week: "Week 10",
    period: "12 May 2024 - 17 May 2024",
    status: "Current week",
    progress: "No activities",
    id: "10",
  },
  {
    week: "Week 11",
    period: "12 May 2024 - 17 May 2024",
    status: "Upcoming",
    progress: "All activities reported",
    id: "11",
  },
  {
    week: "Week 12",
    period: "12 May 2024 - 17 May 2024",
    status: "Upcoming",
    progress: "5 days unreported",
    id: "12",
  },
];

export const weekDetails: WeekDetails = {
  "1": {
    title: "Weekly 1",
    subtitle: "12 May 2024 - 17 May 2024",
    days: [
      {
        day: "Monday",
        date: "12 May 2024",
        status: "Completed",
        activities: "4 activities",
        id: "2024-05-12",
      },
      {
        day: "Tuesday",
        date: "12 May 2024",
        status: "Missed",
        activities: "2 activities",
        id: "2024-05-13",
      },
      {
        day: "Wednesday",
        date: "12 May 2024",
        status: "Completed",
        activities: "4 activities",
        id: "2024-05-14",
      },
      {
        day: "Thursday",
        date: "12 May 2024",
        status: "Current day",
        activities: "5 activities",
        id: "2024-05-15",
      },
      {
        day: "Friday",
        date: "12 May 2024",
        status: "Upcoming",
        activities: "1 activity",
        id: "2024-05-16",
      },
    ],
  },
};

export const dayDetails: DayDetails = {
  "2024-05-12": {
    day: "Monday",
    date: "12 May 2024",
    tasks: [
      {
        id: "1",
        title:
          "Get familiar with the kitchen setup and assist with basic food preparation.",
        status: "Reported",
      },
      {
        id: "2",
        title:
          "Practice knife skills and prepare ingredients for daily cooking.",
        status: "Pending",
      },
      {
        id: "3",
        title: "Help cook simple dishes and maintain proper kitchen hygiene.",
        status: "Pending",
      },
    ],
  },
};
