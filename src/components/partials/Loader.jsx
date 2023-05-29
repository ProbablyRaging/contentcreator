import React from 'react';
import { Loading } from '@nextui-org/react';
import { useLoader } from '../../constants/utils';

const Loader = ({ children, darkMode, delay }) => {
    const [isLoading, setIsLoading] = useLoader(delay);

    return (
        <>
            {isLoading && (
                <div className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center z-50 ${darkMode ? 'bg-black' : 'bg-white'}`}>
                    <Loading size='lg' color="secondary" type="points-opacity" />
                </div>
            )}
        </>
    );
};

export default Loader;