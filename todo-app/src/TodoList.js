import React from "react";
import TodoItem from "./TodoItem";


const TodoList = (props) => {
    const list = props.tasks.map((task, i) => {
        return <TodoItem title={task.title} content={task.content} idx={i} />
    })
    return (
        <div id="list">
            {list}
        </div>
    );
}
export default TodoList;
//maxId = 3, itemId = 0,1,2,3 - 2 delete -> maxId = 2, (0,1,3) -> (0,1,2)