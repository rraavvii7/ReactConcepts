import { Dispatch, SetStateAction, useEffect, useState } from "react";

const getLocalStorageItem = (key : string, initialValue : string | Function) => {
    const savedItem = localStorage.getItem(key);

    if(savedItem) return JSON.parse(savedItem);

    if(initialValue instanceof Function) return initialValue;

    return initialValue;
}

const useLocalStorage = (key : string, initialValue : string | Function) : [string, Dispatch<SetStateAction<string>>]=> {
    const [value, setValue] = useState( () => {
        return getLocalStorageItem(key, initialValue);
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [value]);

    return [value, setValue]
}

export default useLocalStorage;