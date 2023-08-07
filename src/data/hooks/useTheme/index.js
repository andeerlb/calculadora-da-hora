import * as React from 'react';

export function useTheme(key, initialState) {
    const [state, setState] = React.useState(() => {
        const storage = localStorage.getItem(key);
        if (storage) {
            return JSON.parse(storage);
        } else return initialState;
    });

    React.useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state, setState]);

    return [state, setState];
}