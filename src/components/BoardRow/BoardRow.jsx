import React from 'react';

const BoardRow = (props) => {
    const { ccy, buy, sale } = props;

    return (
        <tr>
            <td>{ccy}</td>
            <td>{parseFloat(buy).toFixed(2)}</td>
            <td>{parseFloat(sale).toFixed(2)}</td>
        </tr>
    );
};

export default BoardRow;