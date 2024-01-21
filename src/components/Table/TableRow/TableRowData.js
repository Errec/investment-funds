// Modules
import React from 'react'

// Components
import ReplyCircleIcon from 'mdi-react/ReplyCircleIcon';

// Styles
import './TableRowData.sass'


 const TableRowData = () => {
    return (
        <tr className="tr-data main-row hide-for-small-only">
            <td className="tr-data__td">
                <div>
                    <span> Claritas Inflação Institucional FIM </span>
                    <br></br>
                    <span> Multimercado | Multimercado Livre </span>
                </div>
            </td>
            
            <td className="tr-data__td text--right">
                <span> 19/01/2021 </span>
            </td>
            
            <td className="tr-data__td text--right">
                <span> -0,06 </span>
            </td>
            
            <td className="tr-data__td text--right hide-for-1024">
                <span> -0,06 </span>
            </td>
            
            <td className="tr-data__td text--right">
                <span> 9,19 </span>
            </td>
            
            <td className="tr-data__td text--right">
                <span> 10.000,00 </span>
            </td>
            
            <td className="tr-data__td text--right">
                <span> D+0 </span>
            </td>
            
            <td className="tr-data__td text--center">
                <ReplyCircleIcon></ReplyCircleIcon>
            </td>
        </tr>
        
    )
}

export default TableRowData