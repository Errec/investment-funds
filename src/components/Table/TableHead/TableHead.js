// Modules
import React from 'react';

// Styles
import './TableHead.sass';

const TableHead = () => {
    return (
        <thead className="table-head hide-for-small-only">
            <tr className="table-head__legends table-head__legends--fixed">
                <th>Fundo</th>
                <th>Data da cota</th>
                <th colSpan={3} className="rentability-group">
                    <div className="full-block clearfix text--right">
                        Rentabilidade (%)
                    </div>
                </th>
                <th>Aplicação mínima (R$)</th>
                <th>Cotização do resgate</th>
                <th>Aplicar</th>
            </tr>
            <tr className="table-head__date table-head__date--fixed">
                <th colSpan={2}></th>
                <th style={{width: "70px"}}>
                    Mês
                </th>
                <th style={{width: "70px"}}>
                    2021
                </th>
                <th style={{width: "70px"}}>
                    12M
                </th>
                <th colSpan={3}></th>
            </tr>
        </thead>
    );
};

export default TableHead;

