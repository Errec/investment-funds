// Modules
import React from 'react';

// Styles
import './FundRowDetail.sass'

//Components
import { Grid, Cell} from 'react-foundation';
import Tooltip from '@material-ui/core/Tooltip';
import HelpIcon from '@material-ui/icons/Help';

function FundRowDetail(props) {
    const {
        id,
        isVisible,
        fundData,
        expand,
    } = props;
    
    return (
        <>
        {(isVisible === id && expand) && (<td colSpan={8}>
            <Grid className='fund-row-detail'>
                <Cell small={12} medium={6} large={6}></Cell>
                <Cell small={12} medium={6} large={6}>
                    <ul>
                        <li>
                            <span>Cotização da aplicação: </span>
                            <span>{fundData.operability.application_quotation_days_str} </span>
                            <Tooltip title={"Total de dias para que o valor aplicado seja convertio em cotas do fundo."}>
                                <HelpIcon style={{fontSize: "1.1rem"}}></HelpIcon>
                            </Tooltip>
                        </li>
                        <li>
                            <span>Cotização do resgate: </span>
                            <span>{fundData.operability.retrieval_quotation_days_str} </span>
                            <Tooltip title={"Total de dias para que as cotas do fundo sejam transformadas em valor monetário."}>
                                <HelpIcon style={{fontSize: "1.1rem"}}></HelpIcon>
                            </Tooltip>
                        </li>
                        <li>
                            <span>Liquidação do resgate: </span>
                            <span>{fundData.operability.retrieval_liquidation_days_str} </span>
                            <Tooltip title={"Total de dias após a conversão para que o valor do resgate esteja dispononível em sua Subconta Órama."}>
                                <HelpIcon style={{fontSize: "1.1rem"}}></HelpIcon>
                            </Tooltip>
                        </li>
                        <li>
                            <span>Taxa de administração: </span>
                            <span>{fundData.fees.administration_fee} </span>
                            <Tooltip title={"Taxa anual cobrada pelo Administrador do Fundo como remuneração pelos serviços prestados."}>
                                <HelpIcon style={{fontSize: "1.1rem"}}></HelpIcon>
                            </Tooltip>
                        </li>
                        <li>
                            <span>Horário limite de aplicação: </span>
                            <span>{fundData.operability.application_time_limit.substring(0, 5)} </span>
                            <Tooltip title={"Horário limite para que a aplicação seja efetivada no mesmo dia. Cancelamentos só poderão ser realizados até esse horário."}>
                                <HelpIcon style={{fontSize: "1.1rem"}}></HelpIcon>
                            </Tooltip>
                        </li>
                        <li>
                            <span>Volatilidade 12 meses: </span>
                            <span>{(Number(fundData.volatility_12m) * 100).toFixed(2)}%</span>
                            <Tooltip title={"Medida de dispersão de retornos em relação à sua média.Quanto maior a volatilidade, mais a rentabilidade de um ativo pode variar."}>
                                <HelpIcon style={{fontSize: "1.1rem"}}></HelpIcon>
                            </Tooltip>
                        </li>
                    </ul>
                    <button>CONHEÇA MAIS</button>
                    <p>
                    <strong>CNPJ do fundo: </strong> {fundData.cnpj}
                    <br/>
                    <strong>Nome do gestor: </strong> {fundData.fund_manager.name}
                    </p>
                </Cell>
            </Grid>
        </td>)}
        </>
    )
}

export default FundRowDetail

