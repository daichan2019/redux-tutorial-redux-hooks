import React from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Footer from "./Footer";
import "../App.css";

const App = () => (
  <div>
    <AddTodo />
    <TodoList />
    <Footer />
  </div>
);

export default App;
