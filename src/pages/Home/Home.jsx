import "./Home.css";
import React, { useState } from "react";
import { useData } from "../../contexts/DataProvider";
import { Habit } from "../../components/Habit/Habit";
import { Modal } from "../../components/Modal/Modal";
import { v4 as uuid } from "uuid";
import { GrAdd } from "react-icons/gr";

export const Home = () => {
  const [openAddNewHabitModal, setOpenAddNewHabitModal] = useState(false);

  const [addHabitForm, setAddHabitForm] = useState({
    id: uuid(),
    name: "",
    repeat: "",
    goals: "",
    timeOfDay: "",
    startDate: "",
  });

  const {
    state,
    repeat: repeatData,
    goals: goalsData,
    timeOfDay: timeOfDayData,
    startDate: startDateData,
    dispatch,
  } = useData();

  const addHabitHandler = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD_HABIT", payload: addHabitForm });
    setOpenAddNewHabitModal(false);
  };
  return (
    <div>
      <h1>Home</h1>

      <div>
        <button
          onClick={() => {
            setOpenAddNewHabitModal(true);
          }}
        >
          <GrAdd fontSize={"30px"} />
        </button>
      </div>

      {state.length ? (
        <div className="habits-container">
          {state?.map((habit) => (
            <Habit habit={habit} key={habit.id} />
          ))}
        </div>
      ) : (
        <p>Add a habit!</p>
      )}

      {openAddNewHabitModal && (
        <Modal>
          <div className="edit-form-container">
            <form className="form-input" onSubmit={(e) => addHabitHandler(e)}>
              <div className="name-container">
                <span>Name</span>
                <input
                  required
                  value={addHabitForm?.name}
                  type="text"
                  onChange={(e) =>
                    setAddHabitForm({ ...addHabitForm, name: e.target.value })
                  }
                />
              </div>
              <div className="repeat-goal-container">
                <div className="repeat-container">
                  <span>Repeat</span>
                  <select
                    required
                    value={addHabitForm.repeat}
                    onChange={(e) =>
                      setAddHabitForm({
                        ...addHabitForm,
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
                    required
                    value={addHabitForm?.goals}
                    onChange={(e) =>
                      setAddHabitForm({
                        ...addHabitForm,
                        goals: e.target.value,
                      })
                    }
                  >
                    {goalsData?.map((val) => (
                      <option
                        key={val}
                      >{`${val} ${addHabitForm.repeat}`}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="time-startdate-container">
                <div className="time-of-day-container">
                  <span>Time Of Day</span>
                  <select
                    required
                    onChange={(e) =>
                      setAddHabitForm({
                        ...addHabitForm,
                        timeOfDay: e.target.value,
                      })
                    }
                    value={addHabitForm?.timeOfDay}
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
                      setAddHabitForm({
                        ...addHabitForm,
                        startDate: e.target.value,
                      })
                    }
                    value={addHabitForm?.startDate}
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
                    setOpenAddNewHabitModal(false);
                  }}
                >
                  Discard
                </button>
                <button type="submit">Add</button>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
};
