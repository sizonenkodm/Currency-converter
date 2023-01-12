import React, { useEffect, createContext } from 'react';
import { getRate } from 'utils/axios_utils';
import useLocalStorage from 'hooks/useLocalStorage';
import styles from './App.module.scss';

import Header from 'components/Header';
import Converter from 'components/Converter';

export const Context = createContext(null);

function App() {
    const [rateType, setRateType] = useLocalStorage('rateType', '5');
    const [rateInfo, setRateInfo] = useLocalStorage('rateInfo', []);

    useEffect(() => {
        getRate(rateType)
            .then(response => setRateInfo(response.data));
    }, [rateType]);

    return (
        <div className={styles.App}>
            <Context.Provider value={{ rateType, setRateType, rateInfo }}>
                <Header />
                <Converter />
            </Context.Provider>
        </div>
    );
}

export default App;
