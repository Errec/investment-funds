// Modules
import React from 'react';

// Components
import TableRowTitle  from '../TableRow/TableRowTitle'
import TableRowData  from '../TableRow/TableRowData'
import TableRowDataSmall  from '../TableRow/TableRowDataSmall'

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
            <TableRowData></TableRowData>
            <TableRowDataSmall></TableRowDataSmall>
        </tbody>
    );
};

export default TableBody;

