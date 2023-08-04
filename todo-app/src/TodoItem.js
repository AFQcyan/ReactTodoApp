import React from "react";
const TodoItem = ({ title, content, idx }) => {
    const handleDragStart = (event) => {
        event.dataTransfer.setData("key", idx)
    }
    return (
        <div draggable="true" className="item" onDragStart={handleDragStart}>
            <h4 className="title">{title}</h4>
            <span className="msg">{content}</span>
        </div>
    );
}
export default TodoItem;