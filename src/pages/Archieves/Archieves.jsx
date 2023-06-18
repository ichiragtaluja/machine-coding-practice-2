import "./Archieves.css";
import React from "react";
import { Habit } from "../../components/Habit/Habit";
import { useData } from "../../contexts/DataProvider";

export const Archieves = () => {
  const { archievedHabits } = useData();
  return (
    <div>
      <h1>Archieves</h1>

      {archievedHabits.length ? (
        <div className="habits-container">
          {archievedHabits?.map((habit) => (
            <Habit habit={habit} key={habit?.id} />
          ))}
        </div>
      ) : (
        <p>No Habits Archieved</p>
      )}
    </div>
  );
};
