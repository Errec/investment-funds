// Modules
import React from 'react';
import shortid from 'shortid';


// Components
import ReplyCircleIcon from 'mdi-react/ReplyCircleIcon';
import InformationOutlineIcon from 'mdi-react/InformationOutlineIcon';
import InfoOutlined from '@material-ui/icons/InfoOutlined';
import Tooltip from '@material-ui/core/Tooltip';

// Styles
import './TableRowData.sass'

// Helpers
import returnColorBorder from '../../../helpers/returnColorBorder.js'

 const TableRowData = (props) => {
     const { fundMain } = props;
    return (
        <>
        {fundMain.length ? (
            fundMain.map((fundData, index) => (
                <tr className="tr-data main-row hide-for-small-only" key={shortid.generate()}>
                    <td style={{borderLeftColor: returnColorBorder(fundData.specification.fund_risk_profile.score_range_order) }} className="tr-data__td tr-data__color">
                        <div>
                            {fundData.simple_name}
                            <br></br>
                            {fundData.specification.fund_type} | {fundData.specification.fund_class}
                        </div>
                    </td>

                    <td className="tr-data__td text--right">
                        {fundData.quota_date}
                    </td>

                    <td className="tr-data__td text--right">
                        -0,06<br/>
                        <InfoOutlined color="action"></InfoOutlined>
                    </td>

                    <td className="tr-data__td text--right hide-for-1024">
                        -0,06<br/>
                        <InfoOutlined color="action"></InfoOutlined>
                    </td>

                    <td className="tr-data__td text--right">
                    {(Number(fundData.profitabilities.m12) * 100).toFixed(2)} <br/>
                    <Tooltip title={
                        <React.Fragment>
                            <span><b>Rentabilidade do Fundo: </b></span><span>{(Number(fundData.profitabilities.m12) * 100).toFixed(2)}%</span>
                            <br/>
                            <span><b>CDI 12M: </b></span><span>{(Number(fundData.profitabilities.m12) * 100).toFixed(2)}%</span>
                            <hr/>
                            <span><b>% Sobre CDI: </b></span><span>{(Number(fundData.profitabilities.m12) * 100).toFixed(2)}%</span>
                        </React.Fragment>
                        }>
                        <span>331%</span>
                    </Tooltip>
                    </td>

                    <td className="tr-data__td text--right">
                        {Number(fundData.operability.minimum_initial_application_amount).toFixed(2)}
                    </td>

                    <td className="tr-data__td text--right">
                        {fundData.operability.retrieval_quotation_days_str}
                    </td>

                    <td className="tr-data__td text--center">
                        <ReplyCircleIcon></ReplyCircleIcon>
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