import React from "react";
import "./Habit.css";
import { useState } from "react";
import { Modal } from "../Modal/Modal";
import { useData } from "../../contexts/DataProvider";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";

export const Habit = ({ habit }) => {
  const { id, name, repeat, goals, timeOfDay, startDate } = habit;

  const {
    repeat: repeatData,
    goals: goalsData,
    timeOfDay: timeOfDayData,
    startDate: startDateData,
    dispatch,
    archievedHabits,
    addToArchieve,
    removeFromArchieve,
  } = useData();

  const [openEditHabitModal, setOpenEditHabitModal] = useState(false);
  const [editHabitForm, setEditHabitForm] = useState({
    id,
    name,
    repeat,
    goals,
    timeOfDay,
    startDate,
  });

  const editHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "EDIT_HABIT", payload: editHabitForm });
    setOpenEditHabitModal(false);
  };

  const isArchieved = archievedHabits?.find((hab) => hab?.id === id);

  return (
    <>
      <div className="habbit-card">
        <h3>{name}</h3>
        <button onClick={() => setOpenEditHabitModal(true)}>
          <AiFillEdit />
          Edit
        </button>
        {!isArchieved && (
          <button
            onClick={() => {
              addToArchieve(habit);
            }}
          >
            Add To Archieve
          </button>
        )}
        {isArchieved && (
          <button
            onClick={() => {
              removeFromArchieve(habit);
            }}
          >
            Added to Archieve
          </button>
        )}
        <button
          onClick={() => {
            dispatch({ type: "DELETE_HABIT", payload: habit });
          }}
        >
          <AiFillDelete />
        </button>
      </div>
      {openEditHabitModal && (
        <Modal>
          <div className="edit-form-container">
            <form
              className="form-input"
              onSubmit={(e) => {
                editHandler(e);
              }}
            >
              <div className="name-container">
                <span>Name</span>
                <input
                  value={editHabitForm?.name}
                  type="text"
                  onChange={(e) =>
                    setEditHabitForm({ ...editHabitForm, name: e.target.value })
                  }
                />
              </div>
              <div className="repeat-goal-container">
                <div className="repeat-container">
                  <span>Repeat</span>
                  <select
                    value={editHabitForm.repeat}
                    onChange={(e) =>
                      setEditHabitForm({
                        ...editHabitForm,
                        repeat: e.target.value,
                      })
                    }
                  >
                    {repeatData?.map((val) => (
                      <option key={val}>{val}</option>
                    ))}
                  </select>
                </div>

                <div className="goal-container">
                  <span>Goal</span>
                  <select
                    disabled={!editHabitForm?.repeat}
                    value={editHabitForm?.goals}
                    onChange={(e) =>
                      setEditHabitForm({
                        ...editHabitForm,
                        goals: e.target.value,
                      })
                    }
                  >
                    {goalsData?.map((val) => (
                      <option
                        key={val}
                      >{`${val} ${editHabitForm.repeat}`}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="time-startdate-container">
                <div className="time-of-day-container">
                  <span>Time Of Day</span>
                  <select
                    onChange={(e) =>
                      setEditHabitForm({
                        ...editHabitForm,
                        timeOfDay: e.target.value,
                      })
                    }
                    value={editHabitForm?.timeOfDay}
                  >
                    {timeOfDayData?.map((val) => (
                      <option>{val}</option>
                    ))}
                  </select>
                </div>
                <div className="start-date-container">
                  <span> Start Date</span>

                  <select
                    onChange={(e) =>
                      setEditHabitForm({
                        ...editHabitForm,
                        startDate: e.target.value,
                      })
                    }
                    value={editHabitForm?.startDate}
                  >
                    {startDateData?.map((val) => (
                      <option>{val}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <button
                  onClick={() => {
                    setOpenEditHabitModal(false);
                  }}
                >
                  Discard
                </button>
                <button type="submit">Save</button>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </>
  );
};
