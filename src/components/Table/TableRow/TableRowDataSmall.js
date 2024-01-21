// Modules
import React from 'react'

// Styles
import './TableRowDataSmall.sass'

const TableRowDataSmall = () => {
    return (
        <tr className={'tr-data-small show-for-small-only'}>
            <td className="tr-data__td-small">
                <span> Claritas Inflação Institucional FIM </span>
                <span> [] </span>
            </td>

            <td className="tr-data__td-small">
                <span> Multimercado | Multimercado Livre </span>
            </td>

            <td className="tr-data__td-small text--right font-small-td">
                <span> Data da cota: </span>
                <span> 19/01/2021 </span>
            </td>

            <td className="tr-data__td-small text--right font-small-td">
                <span> Rentabilidade 12 meses: </span>
                <span> 9,19 </span>
            </td>

            <td className="tr-data__td-small text--right font-small-td">
                <span> Aplicação mínima: </span>
                <span> 10.000,00 </span>
            </td>

            <td className="tr-data__td-small text--right font-small-td">
                <span> Cotização do Resgate: </span>
                <span> D+0 </span>
            </td>
            <td className="tr-data__td-small text--right font-small-td">
                <button>Aplicar</button>
                <button> Mais Detalhes </button>
            </td>
        </tr>
    )
}

export default TableRowDataSmall;

