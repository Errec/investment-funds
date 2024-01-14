// Modules
import React from 'react';
import { Cell } from 'react-foundation';

// Components
import TableHead from './TableHead/TableHead.js'

// Styles
import './FundsTable.sass';

const FundsTable = () => {
    return (
        <Cell className="funds-table" large={12} medium={12} small={12} isColumn>
            <div className="new-table-responsive">
                <table className="funds-table--responsive">
                    <TableHead></TableHead>
                </table>
            </div>
        </Cell>
    );
};

export default FundsTable;

