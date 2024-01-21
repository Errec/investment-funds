// Modules
import React from 'react';
import { connect } from 'react-redux';
import { Cell } from 'react-foundation';

// Components
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
        <>
                <Cell className="funds-table" large={12} medium={12} small={12}>
                    <div className="new-table-responsive">
                            <TableHead></TableHead>
                        {data.length && data.map((fund, index) => (
                            <table className="funds-table--responsive">
                                <TableBody></TableBody>
                            </table>
                        ))}
                    </div>
                </Cell>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        fundsReducer: state.fundsReducer,
    };
}

export default connect(mapStateToProps)(FundsTable);

