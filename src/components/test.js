import React, {useEffect, useState} from 'react';

const Test = () => {

    const [text, setText] = useState('')
    useEffect( () => {

         async function getText() {
            let response = await fetch('http://localhost:8080/api/message');
            let json = await response.text()
            setText(json);
        }
        getText()
    }, []);

    return (
        <div>
            {text}
        </div>
    );
};

export default Test;