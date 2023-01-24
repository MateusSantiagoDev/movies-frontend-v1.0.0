import { useContext } from 'react';
import { AppContext } from './provider';

export const useAppContext = () => {
    const context = useContext(AppContext);
    return context
}