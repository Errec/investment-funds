// Modules
import React from 'react';
import HelpCircleIcon from 'mdi-react/HelpCircleIcon';
import ReactTooltip from 'react-tooltip';

// Styles
import './TableBody.sass';

const TableBody = () => {
    return (
        <tbody className="table-body">
            <tr style={{backgroundColor: 'purple'}}>
                <td className="table-body__fund-type" colSpan={8}>
                    Renda Fixa
                    <a data-tip="Tooltip texto dinêmico inserir aqui aqui 02 Tooltip texto dinêmico inserir aqui aqui 02Tooltip texto dinêmico inserir aqui aqui 02Tooltip texto dinêmico inserir aqui aqui 02Tooltip texto dinêmico inserir aqui aqui 02Tooltip texto dinêmico inserir aqui aqui 02">
                    <HelpCircleIcon color={"#505152"} />
                    <ReactTooltip
                        className={"table-body__tooltip"}
                        type={'info'}
                        backgroundColor={"#fff"}
                        borderColor={"#9c9d9e"}
                        place={"bottom"}
                        border={1}
                        textColor={"#9c9d9e"}/>                    
                    </a>
                </td>
            </tr>
            <tr style={{backgroundColor: 'purple'}}>
                <td className="table-body__fund-type" colSpan={8}>
                    Tesouro Inflação + Juros
                    <a data-tip="Tooltip texto dinêmico inserir aqui aqui 02">
                    <HelpCircleIcon color={"#505152"} />
                    <ReactTooltip
                        className={"table-body__tooltip"}
                        type={'info'}
                        backgroundColor={"#fff"}
                        borderColor={"#505152"}
                        place={"bottom"}
                        border={1}
                        textColor={"#505152"}/>                    
                    </a>
                </td>
            </tr>
        </tbody>
    );
};

export default TableBody;

