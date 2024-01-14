// Modules
import React from 'react';
import { Cell } from 'react-foundation';

// Styles
import './FundsTable.sass';

const FundsTable = () => {
    return (
        <Cell className="funds-table" large={12} medium={12} small={12} isColumn>
            <div className="new-table-responsive">
                <table className="funds-table--responsive">
                    {/* <thead className="table-fixedHeader hide-for-small-only has-rentability-tr"> */}
                    <thead className="table-fixedHeader hide-for-small-only">
                        <tr>
                            <th>Fundo</th>
                            <th>Data da cota</th>
                            <th className="rentability-group">
                                <div className="full-block clearfix text--right">
                                    Rentabilidade (%)
                                </div>
                            </th>
                            <th>Aplicação mínima (R$)</th>
                            <th>Cotização do resgate</th>
                            <th>Aplicar</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </Cell>
    );
};

export default FundsTable;

