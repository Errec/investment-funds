// Modules
import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux';

// Styles
    import './Filters.sass'

// Types
import { SET_FUNDS_FILTER } from '../../redux/filters/types';

// Components
import SearchForm from '../../components/SearchForm/SearchForm'
import SliderFilter from '../../components/SliderFilter/SliderFilter'
import { Grid } from 'react-foundation';
import Paper from '@material-ui/core/Paper';

const Filters = (props) => {
    const {
        dispatch,
        fundsReducer: {
            fundsDetailFull,
        },
        filtersReducer
    } = props;

    const [searchText, setSearchText] = useState('');
    useEffect(() => {
        dispatch({
            type: SET_FUNDS_FILTER.REQUEST,
            data: {
                funds: fundsDetailFull.data,
                searchValue: searchText,
            }
        });
    }, [searchText])

    return (
        <Paper className="filters" elevation={1}>
            <Grid>
                <SearchForm setSearchText={setSearchText}></SearchForm>
                {/* <SliderFilter
                    large={4}
                    medium={6}
                    marks={}
                    maxValue={}
                    subtitlePrefix={'Até R$ '}
                    subtitleSuffix={''}
                    title={'Aplicação mínima'}/>
                <SliderFilter
                    large={4}
                    medium={6}
                    marks={}
                    maxValue={}
                    subtitlePrefix={'Até '}
                    subtitleSuffix={' dias úteis'}
                    title={'Aplicação mínima'}/> */}
            </Grid>
        </Paper>
    )
}

const mapStateToProps = (state) => {
    return {
        fundsReducer: state.fundsReducer,
        filtersReducer: state.filtersReducer,
    };
}

export default connect(mapStateToProps)(Filters);
