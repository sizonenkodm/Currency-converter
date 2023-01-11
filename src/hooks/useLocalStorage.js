import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialState) => {
    const get = () => {
        const storage = localStorage.getItem(key);
        return !storage ? initialState : JSON.parse(storage);
    };
    const [value, setValue] = useState(get);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue];
};

export default useLocalStorage;