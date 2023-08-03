import React, { useState } from 'react';

const TodoInput = (props) => {
    const { setState, maxId, list } = props;
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const onDragGarbage = (event) => {
        event.preventDefault()
        const draggedItemId = event.dataTransfer.getData("key");
        console.log(JSON.stringify(draggedItemId));
        setState({ maxId: maxId - 1, list: list.filter((data, i) => i !== parseInt(draggedItemId)) })
    }

    return (
        <div id="menu">
            <div id="addForm">
                <div className='form-group'>
                    <label htmlFor='title'>제목</label>
                    <input type='text' id='title' placeholder='제목을 입력하세요'
                        onChange={(e) => {
                            setTitle(e.target.value)
                        }} value={title} />
                </div>
                <textarea id='content' rows="4" placeholder='내용을 입력하세요'
                    onChange={(e) => {
                        setContent(e.target.value)
                    }} value={content}></textarea>
                <button id='addBtn' onClick={(e) => {
                    setState({ maxId: maxId + 1, list: [...list, { id: maxId + 1, title, content }] })
                    setTitle('');
                    setContent('');
                }}>+</button>
            </div>
            <div id='garbage' onDrop={onDragGarbage} onDragOver={(e) => e.preventDefault()}>
                X
            </div>
        </div>
    );
}

export default TodoInput;