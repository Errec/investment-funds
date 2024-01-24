// Modules
import React from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';

// Components
import { Cell } from 'react-foundation';
import TableHead from '../../components/Table/TableHead/TableHead.js'
import TableBody from '../../components/Table/TableBody/TableBody.js'

// Styles
import './FundsTable.sass';

const FundsTable = (props) => {
    const {
        fundsReducer: {
            fundsDetailFull: {
                data,
            }
        }
    } = props;
    return (
        <Cell className="funds-table" large={12} medium={12} small={12}>
            <div className="new-table-responsive">
                    <table className="funds-table--responsive">
                        <TableHead></TableHead>
                        {data.length ? (data.map((fundMacro, index) => (
                            <TableBody fundMacro={fundMacro} key={shortid.generate()}></TableBody>
                        ))):(
                            <></>
                        )}
                    </table>
            </div>
        </Cell>
    );
};

const mapStateToProps = (state) => {
    return {
        fundsReducer: state.fundsReducer,
    };
}

export default connect(mapStateToProps)(FundsTable);

