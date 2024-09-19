import React, {useEffect, useState} from 'react';

const Test = () => {

    const [text, setText] = useState('')
    useEffect( () => {

         async function getText() {
            let response = await fetch('http://3.34.200.47:8080/api/message');
            let json = await response.text()
            setText(json);
        }
        getText()
    }, []);

    return (
        <div style={{marginTop: '200px'}}>
            {text}
        </div>
    );
};

export default Test;