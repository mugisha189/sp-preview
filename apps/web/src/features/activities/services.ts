import { dayDetails, weekDetails, activities } from "./data";

export const getActivities = async () => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return activities;
};

export const getWeekDetails = async (weekId: string) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return weekDetails[weekId];
};

export const getDayDetails = async (date: string) => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return dayDetails[date];
};
