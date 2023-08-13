import { useLocation } from 'react-router-dom';

export function usePath() {
    const { pathname } = useLocation();
    const isCurrentPath = (link) => {
        if (link === pathname) return true;
        return false;
    };
    return {
        isCurrentPath
    };
}