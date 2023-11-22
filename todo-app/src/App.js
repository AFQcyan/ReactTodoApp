import React, { Fragment, useState } from "react";
import "./App.css";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TestCompo from "./TestCompo";

function App() {
  const [state, setState] = useState({
    maxId: 1,
    list: [
      { id: 0, title: "Todo #1", content: "Sample Content" },
      { id: 1, title: "Todo #2", content: "Sample Content222" },
    ],
  });
  return (
    <Fragment>
      <header>
        <h1>Todo List</h1>
      </header>
      <section id="main">
        <TodoList tasks={state.list} />
        <TodoInput setState={setState} maxId={state.maxId} list={state.list} />
      </section>
      <footer>
        <h4>Todo List by Gondr. CC BY NC SA 4.0</h4>
      </footer>
    </Fragment>
  );
}
export default App;
