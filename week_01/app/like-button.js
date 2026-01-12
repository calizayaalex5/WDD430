'use client'; //esto indica al programa que este condigo tiene que renderizarlo en el lado del cliente

import { useState } from 'react';

export default function LikeButton() {
    const [likes, setLikes] = useState(0);

    function handleClick() {
        setLikes(likes + 1);
    }

    return <button onClick={handleClick}>Like ({likes})</button>
}