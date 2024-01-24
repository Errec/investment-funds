// Modules
import React from 'react';
import shortid from 'shortid';
import moment from 'moment';
import numeral from 'numeral';

// Styles
import './TableRowDataSmall.sass'

//Components
import { Button } from 'react-foundation';
import Tooltip from '@material-ui/core/Tooltip';
import ReplyCircleIcon from 'mdi-react/ReplyCircleIcon';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

// Helpers
import returnColorBorder from '../../../helpers/returnColorBorder.js'

const TableRowDataSmall = (props) => {
    const {
         fundMain,
    } = props;
    
    return (
        <>
        {fundMain.length ? (
            fundMain.map((fundData, index) => (
                <tr className={'tr-data-small show-for-small-only'} key={shortid.generate()}>
                    <td className="tr-data__td-small">
                        <span>{fundData.simple_name}</span>
                        <span style={{background: returnColorBorder(fundData.specification.fund_risk_profile.score_range_order)}} className="tr-data__td-small-color-square"> </span>
                    </td>

                    <td className="tr-data__td-small">
                        <span> {fundData.specification.fund_type} | {fundData.specification.fund_class} </span>
                    </td>

                    <td className="tr-data__td-small font-small-td">
                        <span> Data da cota: </span>
                        <span> {moment(fundData.quota_date).format('DD/MM/YYYY')} </span>
                    </td>

                    <td className="tr-data__td-small font-small-td">
                        <span> Rentabilidade 12 meses: </span>
                        <span> {(Number(fundData.profitabilities.m12) * 100).toFixed(2)} </span>
                    </td>

                    <td className="tr-data__td-small font-small-td">
                        <span> Aplicação mínima: </span>
                        <span> {numeral(Number(fundData.operability.minimum_initial_application_amount).toFixed(2)).format('0,000.00')} </span>
                    </td>

                    <td className="tr-data__td-small font-small-td">
                        <span> Cotização do Resgate: </span>
                        <span>
                            {fundData.operability.retrieval_quotation_days_str.substring(0, 2).includes('D+') ? (
                                fundData.operability.retrieval_quotation_days_str.substring(0, 5).replace(/(\d)\D+$/g, '$1')
                            ):(
                                <Tooltip title={fundData.operability.retrieval_quotation_days_str}>
                                    <InfoOutlinedIcon></InfoOutlinedIcon>
                                </Tooltip>
                            )}
                        </span>
                    </td>
                    <td className="tr-data__td-small font-small-td">
                        <Button>APLICAR</Button>
                        <Button>MAIS DETALHES<ReplyCircleIcon></ReplyCircleIcon></Button>
                    </td>
                </tr>
            )
            )
        ):(
            <></>
        )}
        </>
    )
}

export default TableRowDataSmall;

