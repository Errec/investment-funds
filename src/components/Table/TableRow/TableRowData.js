// Modules
import React from 'react';
import shortid from 'shortid';
import moment from 'moment';
import numeral from 'numeral';


// Components
import Tooltip from '@material-ui/core/Tooltip';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ReplyCircleIcon from 'mdi-react/ReplyCircleIcon';
import BlockIcon from 'mdi-react/BlockIcon';
import RentabilityCalc from '../RentabilityCalc/RentabilityCalc'

// Styles
import './TableRowData.sass';

// Helpers
import returnColorBorder from '../../../helpers/returnColorBorder.js';

 const TableRowData = (props) => {
     const {
         fundMain,
         cdi,
         ibov,
    } = props;

    return (
        <>
        {fundMain.length ? (
            fundMain.map((fundData, index) => (
                <tr className="tr-data main-row hide-for-small-only" key={shortid.generate()}>
                    <td style={{borderLeftColor: returnColorBorder(fundData.specification.fund_risk_profile.score_range_order) }} className="tr-data__td tr-data__color">
                        <div>
                            {fundData.simple_name}
                            {fundData.specification.is_qualified ? (<span>...QUALIFICADO...</span>):('')}
                            {fundData.esg_seal ? (<span>...AMBIENTE...</span>):('')}
                            <br></br>
                            {fundData.specification.fund_type} | {fundData.specification.fund_class}
                        </div>
                    </td>

                    <td className="tr-data__td">
                        {moment(fundData.quota_date).format('DD/MM/YYYY')}
                    </td>

                    <td className="tr-data__td">
                        {(Number(fundData.profitabilities.month) * 100).toFixed(2)}
                        <br/>
                        <RentabilityCalc
                            type="mês"
                            benchmarkName={fundData.benchmark.name}
                            benchmarkProfitability={(fundData.benchmark.name.includes('CDI') || fundData.benchmark.name.includes('IMA-B')) ?
                                                    cdi.current_month_profitability :
                                                    ibov.current_month_profitability}
                            fundProfitabily={fundData.profitabilities.month}/>
                    </td>

                    <td className="tr-data__td hide-for-1024">
                        {(Number(fundData.profitabilities.year) * 100).toFixed(2)}
                        <br/>
                        <RentabilityCalc
                            type={(new Date()).getFullYear()}
                            benchmarkName={fundData.benchmark.name}
                            benchmarkProfitability={(fundData.benchmark.name.includes('CDI') || fundData.benchmark.name.includes('IMA-B')) ?
                                                    cdi.current_year_profitability :
                                                    ibov.current_year_profitability}
                            fundProfitabily={fundData.profitabilities.year}/>
                    </td>

                    <td className="tr-data__td">
                        {(Number(fundData.profitabilities.m12) * 100).toFixed(2)}
                        <br/>
                        <RentabilityCalc
                            type="12M"
                            benchmarkName={fundData.benchmark.name}
                            benchmarkProfitability={(fundData.benchmark.name.includes('CDI') || fundData.benchmark.name.includes('IMA-B')) ?
                                                    cdi.profitability_12_months :
                                                    ibov.profitability_12_months}
                            fundProfitabily={fundData.profitabilities.m12}/>
                    </td>

                    <td className="tr-data__td">
                        {numeral(Number(fundData.operability.minimum_initial_application_amount).toFixed(2)).format('0,000.00')}
                    </td>

                    <td className="tr-data__td">
                    {fundData.operability.retrieval_quotation_days_str.substring(0, 2).includes('D+') ? (
                        fundData.operability.retrieval_quotation_days_str.substring(0, 5).replace(/(\d)\D+$/g, '$1')
                    ):(
                        <Tooltip title={fundData.operability.retrieval_quotation_days_str}>
                            <InfoOutlinedIcon></InfoOutlinedIcon>
                        </Tooltip>
                    )}
                    </td>

                    <td className="tr-data__td text--center">
                        {fundData.is_closed_to_capture ? (
                            <BlockIcon></BlockIcon>
                        ):(
                            <ReplyCircleIcon></ReplyCircleIcon>
                        )}
                    </td>
                </tr>
            ))

        ) : (
            <></>
        )}
        </>
    )
}

export default TableRowData