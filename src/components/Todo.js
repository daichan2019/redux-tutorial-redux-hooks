import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Todo = ({ onClick, completed, text }) => (
  <li
    onClick={onClick}
    className={classNames("todo-item__text", {
      "todo-item__text--completed": completed,
    })}
  >
    {completed ? "👌" : "👋"} <span>{text}</span>
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
};

export default Todo;
