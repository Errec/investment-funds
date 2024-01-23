// Modules
import React from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';

// Components
import TableRowTitle  from '../TableRow/TableRowTitle'
import TableRowData  from '../TableRow/TableRowData'
import TableRowDataSmall  from '../TableRow/TableRowDataSmall'

// Styles
import './TableBody.sass';

// Splice the main data array bye the 3 main Key values, Fixed Income, Variable Income and Differentiated Strategies
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
    const {
        fundMacro,
        profitabilitiesReducer: {
            currentProfitabilities: {
                latestCDIData,
                latestIBOVData,
                isLoading,
            }
        }
    } = props;
    splitMainFunds(fundMacro, 'name');
    return (
        <tbody className="table-body">
            <TableRowTitle
                title={fundMacro[0].specification.fund_macro_strategy.name}
                tooltipText={fundMacro[0].specification.fund_macro_strategy.explanation}/>
                {fundMacro.length && !isLoading ? (splitMainFunds(fundMacro, 'name').map((fundMain, index) => (
                    <>
                        <TableRowTitle
                            key={shortid.generate()}
                            title={fundMain[0].specification.fund_main_strategy.name}
                            tooltipText={fundMain[0].specification.fund_main_strategy.explanation}/>
                        <TableRowData cdi={latestCDIData} ibov={latestIBOVData} fundMain={fundMain} key={shortid.generate()}/>
                        <TableRowDataSmall cdi={latestCDIData} ibov={latestIBOVData} fundMain={fundMain} key={shortid.generate()} />
                    </>
                ))):(
                    <></>
                )}
        </tbody>
    );
};

const mapStateToProps = (state) => {
    return {
        profitabilitiesReducer: state.profitabilitiesReducer,
    };
}

export default connect(mapStateToProps)(TableBody);
