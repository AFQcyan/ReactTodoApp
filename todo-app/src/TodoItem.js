import React from "react";
const TodoItem = (title, content, key, ala) => {
    const handleDragStart = (event) => {
        console.log(ala)
        event.dataTransfer.setData("key", key)
    }
    return (
        <div draggable="true" className="item" onDragStart={handleDragStart}>
            <h4 className="title">{title}</h4>
            <span className="msg">{content}</span>
        </div>
    );
}
export default TodoItem;