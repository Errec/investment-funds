// Modules
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'react-foundation';

// Styles
import './App.sass';

// Components
import CircularProgress from '@material-ui/core/CircularProgress';
import Header from '../Header/Header'
import Legend from '../Legend/Legend'
import FundsTable from '../FundsTable/FundsTable'
import Filters from '../Filters/Filters'

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
            <section className="App__top">
                <Header></Header>
                <Legend></Legend>
            </section>
            {fundsDetailFull.isLoading || currentProfitabilities.isLoading ? (
                <CircularProgress className="App__loading"/>
            ):(
                <>
                    <section className="App__bottom">
                        <Grid className="App__bottom-grid">
                            <Filters></Filters>
                            <FundsTable></FundsTable>
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
