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
            fundsDetailFull
        },
        filtersReducer
    } = props;

    const [searchText, setSearchText] = useState('');
    const marksValues =  Array.from(Array(fundsDetailFull.minValueFilter.length).keys())
    const marksDays =  Array.from(Array(fundsDetailFull.minRetrievalFilter.length).keys())
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
                <SliderFilter
                    large={4}
                    medium={6}
                    marks={fundsDetailFull.minValueFilter ? marksValues : []}
                    marksValues={fundsDetailFull.minValueFilter}
                    maxValue={marksValues[marksValues.length - 1]}
                    minValue={marksValues[marksValues[0]]}
                    title={'Aplicação mínima'}/>

                <SliderFilter
                    large={4}
                    medium={6}
                    marks={fundsDetailFull.minRetrievalFilter ? marksDays : []}
                    marksValues={fundsDetailFull.minRetrievalFilter}
                    maxValue={marksDays[marksDays.length - 1]}
                    minValue={marksDays[marksDays[0]]}
                    title={'Prazo de resgate'}/>

                {/* <SliderFilter
                    large={4}
                    medium={6}
                    marks={fundsDetailFull.minRetrievalFilter ? fundsDetailFull.minRetrievalFilter : []}
                    maxValue={fundsDetailFull.minRetrievalFilter[fundsDetailFull.minRetrievalFilter.length - 1]}
                    minValue={fundsDetailFull.minRetrievalFilter[fundsDetailFull.minRetrievalFilter[0]]}
                    // maxValue={fundsDetailFull.minRetrievalFilter ? Object.values(fundsDetailFull.minRetrievalFilter[fundsDetailFull.minRetrievalFilter.length - 1])[0] : 0}
                    subtitlePrefix={'Até '}
                    subtitleSuffix={' dias úteis'}
                    title={'Prazo de resgate'}/> */}
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
