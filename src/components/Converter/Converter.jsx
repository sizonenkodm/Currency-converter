import React, { useEffect, useContext } from 'react';
import { Context } from 'components/App/App';
import useLocalStorage from 'hooks/useLocalStorage';
import { rateCalculation } from 'common/rateCalculation';
import { setFieldValueView } from 'common/setFieldValueView';
import { operationOptions, currencyList } from 'common/selectsOptions';
import styles from './Converter.module.scss';

import Select from 'components/Select';
import InputField from 'components/InputField';

const Converter = () => {
    const [firstCurrency, setFirstCurrency] = useLocalStorage('firstCurrency', 'USD');
    const [secondCurrency, setSecondCurrency] = useLocalStorage('secondCurrency', 'UAH');
    const [firstInput, setFirstInput] = useLocalStorage('firstInput', '');
    const [secondInput, setSecondInput] = useLocalStorage('secondInput', '');
    const [operationType, setOperationType] = useLocalStorage('operationType', 'sale');


    const { rateInfo } = useContext(Context);

    const firstInputChangeHandler = (event) => {
        const inputValue = event.target.value;
        setFirstInput(inputValue);

        const result = rateCalculation(firstCurrency, secondCurrency, +inputValue, rateInfo, operationType);
        setSecondInput(setFieldValueView(result));
    }

    const secondInputChangeHandler = (event) => {
        const inputValue = event.target.value;
        setSecondInput(inputValue);

        const result = rateCalculation(secondCurrency, firstCurrency, +inputValue, rateInfo, operationType);
        setFirstInput(setFieldValueView(result));
    }

    const firstInputBlurHandler = () => {
        if (!firstInput) setSecondInput('');
    }

    const secondInputBlurHandler = () => {
        if (!secondInput) setFirstInput('');
    }

    useEffect(() => {
        if (firstInput) {
            const result = rateCalculation(secondCurrency, firstCurrency, +secondInput, rateInfo, operationType);
            setFirstInput(setFieldValueView(result));
        }
    }, [firstCurrency]);

    useEffect(() => {
        if (secondInput) {
            const result = rateCalculation(firstCurrency, secondCurrency, +firstInput, rateInfo, operationType);
            setSecondInput(setFieldValueView(result));
        }
    }, [secondCurrency, operationType, rateInfo]);

    return (
        <div className={styles.converter}>
            <Select
                options={operationOptions}
                sort={operationType}
                setSort={setOperationType}
                selectWidth={120}
            />
            <div className={styles.container}>
                <div className={styles.converter__section}>
                    <Select
                        options={currencyList}
                        sort={firstCurrency}
                        setSort={setFirstCurrency}
                        selectWidth={120}
                    />
                    <InputField
                        type='number'
                        placeholder={firstCurrency}
                        value={firstInput}
                        changeHandler={firstInputChangeHandler}
                        blurHandler={firstInputBlurHandler}
                    />
                </div>
                <img className={styles.converter__icon} src='assets/convert-icon.svg' alt='converter-icon' />
                <div className={styles.converter__section}>
                    <InputField
                        type='number'
                        placeholder={secondCurrency}
                        value={secondInput}
                        changeHandler={secondInputChangeHandler}
                        blurHandler={secondInputBlurHandler}
                    />
                    <Select
                        options={currencyList}
                        sort={secondCurrency}
                        setSort={setSecondCurrency}
                        selectWidth={120}
                    />
                </div>
            </div>
        </div>
    );
};

export default Converter;