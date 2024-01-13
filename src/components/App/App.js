// Modules
import React, { useEffect } from 'react';
import './App.sass';
import { connect } from 'react-redux';

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

    console.log(data);

    return (
        <main className="App">
            <header>
                {isLoading ? (
                    <p>LOADING...</p>
                ):(
                    <h1>TITLE</h1>
                )}
            </header>
        </main>
    );
};

const mapStateToProps = (state) => {
    return {
        fundsReducer: state.fundsReducer,
    };
}

export default connect(mapStateToProps)(App);
