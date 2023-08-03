import React from "react";
import TodoItem from "./TodoItem";


const TodoList = (props) => {
    const list = props.tasks.map((task) => {
        console.log(task)
        return <TodoItem title={task.title} content={task.content} key={task.id} />
    })
    return (
        <div id="list">
            {list}
        </div>
    );
}
export default TodoList;