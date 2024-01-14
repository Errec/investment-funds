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

const App = (props) => {
    const {
        dispatch,
        fundsReducer: {
            fundsDetailFull: {
                data,
                isLoading,
                error,
            }
        }
    } = props;
    useEffect(() => {

        dispatch({
            type: FETCH_FUNDS_DETAIL_FULL.REQUEST,
        });
    }, [])

    return (
        <main className="App">
                {!isLoading ? (
                    <p>LOADING...</p>
                ):(
                    <>
                        <section className="App__top">
                            <Header></Header>
                            <Legend></Legend>
                        </section>
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
    };
}

export default connect(mapStateToProps)(App);
