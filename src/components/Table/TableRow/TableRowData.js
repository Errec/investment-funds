// Modules
import React from 'react';
import shortid from 'shortid';

// Components
import ReplyCircleIcon from 'mdi-react/ReplyCircleIcon';
import InformationOutlineIcon from 'mdi-react/InformationOutlineIcon';

// Styles
import './TableRowData.sass'


 const TableRowData = (props) => {
     const { fundMain } = props;
    return (
        <>
        {fundMain.length ? (
            fundMain.map((fundData, index) => (
                <tr className="tr-data main-row hide-for-small-only" key={shortid.generate()}>
                    <td className="tr-data__td tr-data__color">
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
                        <InformationOutlineIcon></InformationOutlineIcon>
                    </td>

                    <td className="tr-data__td text--right hide-for-1024">
                        -0,06<br/>
                        <InformationOutlineIcon></InformationOutlineIcon>
                    </td>

                    <td className="tr-data__td text--right">
                        9,19<b/>33.1%
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