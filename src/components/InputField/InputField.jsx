import React from 'react';
import PropTypes from 'prop-types';
import styles from './InputField.module.scss';

const InputField = (props) => {
    const { type, placeholder, value, changeHandler, blurHandler } = props;

    return (
        <>
            <input
                className={styles.input}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={changeHandler}
                onBlur={blurHandler}
            />
        </>
    );
};

InputField.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    changeHandler: PropTypes.func.isRequired,
    blurHandler: PropTypes.func.isRequired,
}

export default InputField;