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
import RiskFilter from '../../components/RiskFilter/RiskFilter'
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
    const marksRisk =  Array.from(Array(fundsDetailFull.riskFilter.length).keys())
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
            <Grid className="filters__grid">
                <SearchForm setSearchText={setSearchText}></SearchForm>
                <SliderFilter
                    className="filters__slider"
                    large={3}
                    medium={6}
                    marks={fundsDetailFull.minValueFilter ? marksValues : []}
                    marksValues={fundsDetailFull.minValueFilter}
                    maxValue={marksValues[marksValues.length - 1]}
                    minValue={marksValues[marksValues[0]]}
                    title={'Aplicação mínima'}/>

                <RiskFilter
                    className="filters__slider"
                    large={5}
                    medium={6}
                    marks={fundsDetailFull.riskFilter ? marksRisk : []}
                    marksValues={fundsDetailFull.riskFilter}
                    maxValue={marksRisk[marksRisk.length - 1]}
                    minValue={marksRisk[marksRisk[0]]}
                    title={'Perfil de risco de fundo'}/>

                <SliderFilter
                    className="filters__slider"
                    large={3}
                    medium={6}
                    marks={fundsDetailFull.minRetrievalFilter ? marksDays : []}
                    marksValues={fundsDetailFull.minRetrievalFilter}
                    maxValue={marksDays[marksDays.length - 1]}
                    minValue={marksDays[marksDays[0]]}
                    title={'Prazo de resgate'}/>
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
