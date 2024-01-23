// Modules
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'react-foundation';

// Styles
import './App.sass';

// Components
import Header from '../Header/Header.js'
import Legend from '../Legend/Legend.js'
import FundsTable from '../FundsTable/FundsTable.js'

// Types
import { FETCH_FUNDS_DETAIL_FULL } from '../../redux/funds/types';
import { FETCH_CURRENT_PROFITABILITIES } from '../../redux/profitabilities/types';

const App = (props) => {
    const {
        dispatch,
        fundsReducer: {
            fundsDetailFull,
        },
        profitabilitiesReducer: {
            currentProfitabilities,
        }
    } = props;

    useEffect(() => {
        dispatch({
            type: FETCH_FUNDS_DETAIL_FULL.REQUEST,
        });
        dispatch({
            type: FETCH_CURRENT_PROFITABILITIES.REQUEST,
        });
    }, [])



    return (
        <main className="App">
            <h1>{currentProfitabilities.latestCDIData.benchmark_name}</h1>
            <h1>{currentProfitabilities.latestCDIData.reference_date}</h1>
            <h1>{currentProfitabilities.latestIBOVData.benchmark_name}</h1>
            <h1>{currentProfitabilities.latestIBOVData.reference_date}</h1>
            <section className="App__top">
                <Header></Header>
                <Legend></Legend>
            </section>
            {fundsDetailFull.isLoading && currentProfitabilities.isLoading ? (
                <p>LOADING...</p>
            ):(
                <>
                    <section className="App__bottom">
                        <Grid className="App__bottom-grid">
                            <FundsTable></FundsTable>
                            {/* <FundsFilter></FundsFilter> */}
                        </Grid>
                    </section>
                </>
            )}
        </main>
    );
};

const mapStateToProps = (state) => {
    return {
        fundsReducer: state.fundsReducer,
        profitabilitiesReducer: state.profitabilitiesReducer,
    };
}

export default connect(mapStateToProps)(App);
