import {useState} from 'react';

function useCounter(){
    const [count, setCount]= useState(0);

    function increase(){
        setCount((prev) => prev + 1);
    }
    
    function decrease(){
        setCount((prev)=> prev - 1);
    }

    function reset(){
        setCount(0);
    };

    return {count, increase, decrease, reset};
}

export default useCounter;
