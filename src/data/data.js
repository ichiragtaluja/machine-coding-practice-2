import { v4 as uuid } from "uuid";

export const habits = [
  {
    id: uuid(),
    name: "Exercise",
    repeat: "daily",
    goals: "1 time daily",
    timeOfDay: "morning",
    startDate: "today",
  },
  {
    id: uuid(),
    name: "Read",
    repeat: "daily",
    goals: "2 times daily",
    timeOfDay: "any time",
    startDate: "today",
  },
  {
    id: uuid(),
    name: "Meditate",
    repeat: "weekly",
    goals: "1 time weekly",
    timeOfDay: "evening",
    startDate: "today",
  },
  {
    id: uuid(),
    name: "Drink water",
    repeat: "daily",
    goals: "1 time daily",
    timeOfDay: "any time",
    startDate: "tomorrow",
  },
  {
    id: uuid(),
    name: "Write in journal",
    repeat: "daily",
    goals: "1 time monthly",
    timeOfDay: "evening",
    startDate: "tomorrow",
  },
  {
    id: uuid(),
    name: "Learn a new skill",
    repeat: "monthly",
    goals: "1 time monthly",
    timeOfDay: "any time",
    startDate: "tomorrow",
  },
];

export const repeat = ["Daily", "Weekly", "Monthly"];

export const goals = ["1 time", "2 times", "3 times"];

export const timeOfDay = ["Any Time", "Morning", "Evening"];

export const startDate = ["Today", "Tomorrow"];
