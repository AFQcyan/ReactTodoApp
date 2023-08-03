import React, { useState } from 'react';
const TestCompo = (props) => {
    const [text, setText] = useState("초기값");
    return (
        <div>
            <input type='text' onChange={e => setText(e.target.value)} value={text} />
            <p className='text'>{text}</p>
        </div>
    );
}
export default TestCompo