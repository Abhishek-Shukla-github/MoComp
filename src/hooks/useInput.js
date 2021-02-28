import React, { useState } from 'react';

export default function useInput(initialVal) {
    const [input, setInput] = useState(initialVal);
    const handleInput = (name) => {
        setInput(name);
    }
    return [input, handleInput];
}
