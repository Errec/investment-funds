// Modules
import React from 'react';
import shortid from 'shortid';

// Styles
import './TableRowDataSmall.sass'

// Helpers
import returnColorBorder from '../../../helpers/returnColorBorder.js'

const TableRowDataSmall = (props) => {
    const { fundMain } = props;
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

                    <td className="tr-data__td-small text--right font-small-td">
                        <span> Data da cota: </span>
                        <span> {fundData.quota_date} </span>
                    </td>

                    <td className="tr-data__td-small text--right font-small-td">
                        <span> Rentabilidade 12 meses: </span>
                        <span> 9,19 </span>
                    </td>

                    <td className="tr-data__td-small text--right font-small-td">
                        <span> Aplicação mínima: </span>
                        <span> {Number(fundData.operability.minimum_initial_application_amount).toFixed(2)} </span>
                    </td>

                    <td className="tr-data__td-small text--right font-small-td">
                        <span> Cotização do Resgate: </span>
                        <span> {fundData.operability.retrieval_quotation_days_str} </span>
                    </td>
                    <td className="tr-data__td-small text--right font-small-td">
                        <button>Aplicar</button>
                        <button> Mais Detalhes </button>
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

