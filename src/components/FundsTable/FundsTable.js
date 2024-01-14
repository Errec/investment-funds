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
                            <th colSpan={3} className="rentability-group">
                                <div className="full-block clearfix text--right">
                                    Rentabilidade (%)
                                </div>
                            </th>
                            <th>Aplicação mínima (R$)</th>
                            <th>Cotização do resgate</th>
                            <th>Aplicar</th>
                        </tr>
                        <tr>
                            <th colspan="2"></th>
                            <th style={{width: "70px", textAlign: "right"}}>
                                Mês
                            </th>
                            <th style={{width: "70px", textAlign: "right"}}>
                                2021
                            </th>
                            <th style={{width: "70px", textAlign: "right"}}>
                                12M
                            </th>
                            <th colspan="3"></th>
                        </tr>
                    </thead>
                </table>
            </div>
        </Cell>
    );
};

export default FundsTable;

