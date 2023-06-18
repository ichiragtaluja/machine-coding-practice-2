import React, { createContext, useContext, useState, useReducer } from "react";
import { habits } from "../data/data";
import { repeat } from "../data/data";
import { goals } from "../data/data";
import { timeOfDay } from "../data/data";
import { startDate } from "../data/data";

const DataContext = createContext();

const habitReducer = (state, action) => {
  switch (action.type) {
    case "ADD_HABIT": {
      const newHabit = { ...action.payload };
      const updatedHabits = [newHabit, ...state];
      return updatedHabits;
    }

    case "DELETE_HABIT": {
      const selectedHabit = { ...action.payload };
      const updatedHabits = state.filter(
        (habit) => habit.id !== selectedHabit.id
      );
      return updatedHabits;
    }

    case "EDIT_HABIT": {
      const editedHabit = { ...action.payload };
      const updatedHabits = state.map((habit) =>
        habit.id === editedHabit.id ? editedHabit : habit
      );
      return updatedHabits;
    }
    default:
      return state;
  }
};

const initial = habits;

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(habitReducer, initial);

  const [archievedHabits, setArchievedHabits] = useState([]);

  const addToArchieve = (habit) => {
    setArchievedHabits([...archievedHabits, { ...habit }]);
  };

  const removeFromArchieve = (habit) => {
    setArchievedHabits(archievedHabits.filter(({ id }) => id !== habit.id));
  };
  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
        repeat,
        goals,
        timeOfDay,
        startDate,
        archievedHabits,
        setArchievedHabits,
        addToArchieve,
        removeFromArchieve,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
