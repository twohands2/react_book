import React, {useState} from 'react';

const Say = () => {
    //Hook useState 사용
    const [msg, setMsg] = useState('');
    const sayHello = () => setMsg('안녕하세요');
    const sayBye = () => setMsg('안녕히가세요');

    const [color, setColor] = useState('Black');

    return (
        <>
            <button onClick={sayHello}>Hello</button>
            <button onClick={sayBye}>Bye</button>
            <h1 style={{color}}>{msg}</h1>
            <button onClick={() => {setColor('Black')}}>BLACK</button>
            <button onClick={() => {setColor('Blue')}}>BLUE</button>
            <button onClick={() => {setColor('Red')}}>RED</button>
        </>
    );
};

export default Say;