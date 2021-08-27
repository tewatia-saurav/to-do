import React from "react";

function Item(props) {
  return (
    <div className="item-list">
      <div className="form-check ">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          checked={props.task.completed}
          onChange={()=>props.updateStatus(props.task.id)}
        />
        {props.task.completed ? (
          <strike>
            {props.task.task}
          </strike>
        ) : (
          <label>{props.task.task}</label>
        )}
      </div>
    </div>
  );
}

export default Item;
