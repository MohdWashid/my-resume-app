import React, { useEffect, useState } from 'react';

const TypewriterEffect = ({ words }) => {
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);

    useEffect(() => {
        if (subIndex === words[index].length + 1 && !reverse) {
            setReverse(true);
            return;
        }
        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }
        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, parseInt(Math.random() * 350)));
        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse, words]);

    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);

    return (
        <h2 className="text-2xl font-bold mb-4">
            I'm {' '}
            <span className="text-blue-500">
                {`${words[index].substring(0, subIndex)}${blink ? '|' : ' '}`}
            </span>
            {' '}developer
        </h2>
    );
};

export default TypewriterEffect;


