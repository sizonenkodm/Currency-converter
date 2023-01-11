import React from 'react';
import PropTypes from 'prop-types';
import styles from './Select.module.scss';

const Select = (props) => {
    const { options, sort, setSort, selectWidth } = props;

    const changeHandler = (event) => {
        setSort(event.target.value);
    }

    return (
        <select
            className={styles.select}
            style={{ width: `${selectWidth}px` }}
            value={sort}
            onChange={changeHandler}
        >
            {
                options.map(option => (
                    <option value={option.value} key={option.value}>
                        {option.label}
                    </option>
                ))
            }
        </select>
    );
};

Select.propTypes = {
    options: PropTypes.array.isRequired,
    sort: PropTypes.string.isRequired,
    setSort: PropTypes.func.isRequired,
    selectWidth: PropTypes.number.isRequired
}

export default Select;