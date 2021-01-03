import React, { useState, useEffect } from 'react';

const TextBlinker = (props) => {

    const [wordCount, setWordCount] = useState(0);
    //using the new effect hooks. and cleaning up after it
    useEffect(() => {

        let x = setInterval(() => {
            if (wordCount < props.textParts.length - 1) {
                setWordCount(wordCount + 1);
            }
            else {
                setWordCount(0);
            }

        }, 1000);

        return () => {
            clearInterval(x);
        }
    });


    return (

        <div>
            <h2>{props.textParts[wordCount]}</h2>
        </div>
    )
}

export default TextBlinker