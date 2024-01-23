// Modules
import React from 'react';
import shortid from 'shortid';

// Components
import TableRowTitle  from '../TableRow/TableRowTitle'
import TableRowData  from '../TableRow/TableRowData'
import TableRowDataSmall  from '../TableRow/TableRowDataSmall'

// Styles
import './TableBody.sass';

const splitMainFunds = (fundMacro, fundKey) => {
    const fundsMain = {};
    const splicedFundsMain = [];
    fundMacro.forEach((fund, index) => {
        if (!(fund.specification.fund_main_strategy[fundKey] in fundsMain)) {
            fundsMain[fund.specification.fund_main_strategy[fundKey]] = [];
            splicedFundsMain.push(fundsMain[fund.specification.fund_main_strategy[fundKey]]);
        }
        fundsMain[fund.specification.fund_main_strategy[fundKey]].push(fund);
    });
    return splicedFundsMain;
};

const TableBody = (props) => {
    const { fundMacro } = props;
    splitMainFunds(fundMacro, 'name');
    return (
        <tbody className="table-body">
            <TableRowTitle
                title={fundMacro[0].specification.fund_macro_strategy.name}
                tooltipText={fundMacro[0].specification.fund_macro_strategy.explanation}/>
                {fundMacro.length ? (splitMainFunds(fundMacro, 'name').map((fundMain, index) => (
                    <>
                    <TableRowTitle
                        key={shortid.generate()}
                        title={fundMain[0].specification.fund_main_strategy.name}
                        tooltipText={fundMain[0].specification.fund_main_strategy.explanation}/>
                    <TableRowData fundMain={fundMain} key={shortid.generate()}/>
                    <TableRowDataSmall fundMain={fundMain} key={shortid.generate()} />
                    </>
                ))):(
                    <></>
                )}
        </tbody>
    );
};

export default TableBody;

