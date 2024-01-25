const splitFundsArr = (fundsData) => {

    const fundsFixedIncome = [];
    const fundsVariableIncome = [];
    const differentiatedStrategies = [];
    const funds = [];

    fundsData.forEach(fund => {
        switch (fund.specification.fund_main_strategy.fund_macro_strategy) {
            case 1:
                fundsFixedIncome.push(fund)
                break;
            case 2:
                differentiatedStrategies.push(fund)
                break;
            case 3:
                fundsVariableIncome.push(fund)
                break;
            default:
                break;
        }
    });

    if(fundsFixedIncome.length) { funds.push(fundsFixedIncome) }
    if(differentiatedStrategies.length) { funds.push(differentiatedStrategies) }
    if(fundsVariableIncome.length) { funds.push(fundsVariableIncome) }

    return funds;
}

export default splitFundsArr;