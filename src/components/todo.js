import React, { useState } from "react";
import Item from "./item";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

const dummy = [
  { id: 1, task: "Item1", completed: false },
  { id: 2, task: "Item2", completed: false },
  { id: 3, task: "Item3", completed: false },
  { id: 4, task: "Item4", completed: false },
  { id: 5, task: "Item5", completed: true },
];

function Todo() {
  const [tasks, setTasks] = useState(dummy);
  const [newTask, setNewTask] = useState("");

  const [expand, setExpand] = useState(false);

  const addTask = () => {
    setTasks([
      ...tasks,
      { id: tasks.length + 1, task: newTask, completed: false },
    ]);
    setNewTask("");
  };

  const changeStatus = (id) => {
    let updatedTasks = [];

    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === id) {
        updatedTasks.push({ ...tasks[i], completed: !tasks[i].completed });
      } else {
        updatedTasks.push({ ...tasks[i] });
      }
    }
    setTasks(updatedTasks);
  };

  return (
    <div className="main-div">
      <div>
        <h5 className="task-heading">Pending Tasks</h5>
        {tasks.map((task) => {
          if (!task.completed) {
            return (
              <Item
                task={task}
                type="pending"
                key={task.id}
                updateStatus={changeStatus}
              />
            );
          }
        })}

        {/* input field for adding a task */}
        <div className="input-group input-group-sm mb-3">
          <input
            type="text"
            className="form-control"
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Add a new task"
            onChange={(e) => setNewTask(e.target.value)}
            value={newTask}
          />
          <div className="input-group-prepend">
            <button type="button" className="btn btn-primary" onClick={addTask}>
              Add
            </button>
          </div>
        </div>
      </div>
      <hr></hr>
      <div>
        <div class="dropdown" onClick={() => setExpand(!expand)}>
        {!expand ? (
            <DownOutlined className="icon" style={{fontSize:"13px"}} />
          ) : (
            <UpOutlined className="icon" style={{fontSize:"13px"}}/>
          )}
          <h5 className="task-heading">Completed Tasks</h5>
          
        </div>
        {expand &&
          tasks.map((task) => {
            if (task.completed) {
              return (
                <Item
                  task={task}
                  type="pending"
                  key={task.id}
                  updateStatus={changeStatus}
                />
              );
            }
          })}
      </div>
    </div>
  );
}

export default Todo;
