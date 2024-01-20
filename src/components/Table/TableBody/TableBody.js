// Modules
import React from 'react';

// Components
import TableRowTitle  from '../TableRow/TableRowTitle'

// Styles
import './TableBody.sass';

const TableBody = () => {
    return (
        <tbody className="table-body">
            <TableRowTitle 
                title="Renda Fixa"
                tooltipText="Tooltip texto dinêmico inserir aqui aqui 02 Tooltip texto dinêmico inserir aqui aqui 02Tooltip texto dinêmico inserir aqui aqui 02Tooltip texto dinêmico inserir aqui aqui 02Tooltip texto dinêmico inserir aqui aqui 02Tooltip texto dinêmico inserir aqui aqui 02">
            </TableRowTitle>
            <TableRowTitle 
                title="Tesouro Inflação + Juros"
                tooltipText="Tooltip texto dinêmico inserir aqui aqui 02">
            </TableRowTitle>
        </tbody>
    );
};

export default TableBody;

