// Modules
import React from 'react';


// Components
import Tooltip from '@material-ui/core/Tooltip';
import InfoOutlined from '@material-ui/icons/InfoOutlined';

// Styles
import './RentabilityCalc.sass';

const getRentability = (profitabily, benchmark, benchmarkName) => {
    if ((benchmarkName.includes('CDI') || benchmarkName.includes('IMA-B'))) {
        return (Number(profitabily) / (Number(benchmark)) * 100)
    } else {
        return ((Number(profitabily) - Number(benchmark)) * 100);
    };
};


const RentabilityCalc = (props) => {
    const {
        type,
        fundProfitabily,
        benchmarkProfitability,
        benchmarkName,
    } = props;
    return (
        (Number(fundProfitabily) < 0 || Number(benchmarkProfitability) < 0) ? (
            <Tooltip title={
                <React.Fragment>
                    <span><b>Rentabilidade do Fundo: </b></span><span>{(Number(fundProfitabily) * 100).toFixed(2)}%</span>
                    <br/>
                    <br/>
                    <span><b>{(benchmarkName.includes('CDI') || benchmarkName.includes('IMA-B')) ? 'CDI' : 'IBOV'} {type}: </b></span><span>{(Number(benchmarkProfitability) * 100).toFixed(2)}%</span>
                    <hr/>
                    <span>Conforme deliberação da Anbima nº70, quando uma das variáveis, ou ambas, forem negativas, não é permitido que percentual do CDI seja divulgado.</span>
                </React.Fragment>
                }>
                <InfoOutlined style={{height: "1.1rem"}} color="action"></InfoOutlined>
            </Tooltip>
        ):(
            <Tooltip title={
                <React.Fragment>
                    <span><b>Rentabilidade do Fundo: </b></span><span>{(Number(fundProfitabily) * 100).toFixed(2)}%</span>
                    <br/>
                    <span><b>{(benchmarkName.includes('CDI') || benchmarkName.includes('IMA-B')) ? 'CDI' : 'IBOV'} {type}: </b></span><span>{(Number(benchmarkProfitability) * 100).toFixed(2)}%</span>
                    <hr/>
                    <span><b>{(benchmarkName.includes('CDI') || benchmarkName.includes('IMA-B')) ? '% Sobre CDI' : 'Diferença'}: </b></span><span>{getRentability(fundProfitabily, benchmarkProfitability, benchmarkName).toFixed(2)}%</span>
                </React.Fragment>
                }>
                <span>{ getRentability(fundProfitabily, benchmarkProfitability, benchmarkName).toFixed(0) }%</span>
            </Tooltip>
        )
    )
}

export default RentabilityCalc

