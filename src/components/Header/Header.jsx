import React, { useContext } from 'react';
import { Context } from 'components/App/App';
import { currencyOptions } from 'utils/selectsOptions';
import styles from './Header.module.scss';

import Select from 'components/Select';
import Board from 'components/Board';

const Header = () => {
    const { rateType, setRateType } = useContext(Context);

    return (
        <header className={styles.header}>
            <Board />
            <Select options={currencyOptions} sort={rateType} setSort={setRateType} selectWidth={320} />
        </header>
    );
};

export default Header;