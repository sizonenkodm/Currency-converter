import React, { useContext } from 'react';
import { Context } from 'components/App/App';
import styles from './Board.module.scss';

import BoardRow from 'components/BoardRow';

const Board = () => {
    const { rateInfo } = useContext(Context);

    return (
        <table className={styles.board}>
            <tbody>
                <tr>
                    <th></th>
                    <th>Buy</th>
                    <th>Sale</th>
                </tr>
                {
                    rateInfo.map(el => <BoardRow key={el.ccy} {...el} />)
                }
            </tbody>
        </table>
    );
};

export default Board;