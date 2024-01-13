// Modules
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Styles
import './App.sass';

// Components
import Header from '../Header/Header.js'
import Legend from '../Legend/Legend.js'

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
    })

    console.log(data);

    return (
        <main className="App">
                {!isLoading ? (
                    <p>LOADING...</p>
                ):(
                    <>
                        <Header></Header>
                        <Legend></Legend>
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
