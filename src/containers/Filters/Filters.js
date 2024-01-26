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
    const marksValues =  Array.from(Array(fundsDetailFull.minValueFilter.length).keys())
    const marksDays =  Array.from(Array(fundsDetailFull.minRetrievalFilter.length).keys())
    const marksRisk =  Array.from(Array(fundsDetailFull.riskFilter.length).keys())

    const [searchInput, setSearchInput] = useState('');
    const [searchMinValueInput, setSearchMinValueInput] = useState(marksValues[marksValues.length - 1]);
    const [searchRiskInput, setSearchRiskInput] = useState(marksRisk[marksRisk.length - 1]);
    const [searchMinRetrievalInput, setSearchMinRetrievalInput] = useState(marksDays[marksDays.length - 1]);
    useEffect(() => {
        dispatch({
            type: SET_FUNDS_FILTER.REQUEST,
            data: {
                funds: fundsDetailFull.data,
                searchTitle: searchInput,
                searchMinValueApp: searchMinValueInput,
                searchRisk: searchRiskInput,
                searchMinRetrieval: searchMinRetrievalInput,
            }
        });
    }, [searchInput, searchMinValueInput, searchMinRetrievalInput, searchRiskInput])

    return (
        <Paper className="filters" elevation={1}>
            <Grid className="filters__grid">
                <SearchForm setSearchInput={setSearchInput}></SearchForm>
                <SliderFilter
                    setSearchInput={setSearchMinValueInput}
                    className="filters__slider"
                    large={3}
                    medium={6}
                    marks={fundsDetailFull.minValueFilter ? marksValues : []}
                    marksValues={fundsDetailFull.minValueFilter}
                    maxValue={marksValues[marksValues.length - 1]}
                    minValue={marksValues[marksValues[0]]}
                    title={'Aplicação mínima'}/>

                <RiskFilter
                    setSearchRiskInput={setSearchRiskInput}
                    className="filters__slider"
                    large={5}
                    medium={6}
                    marks={fundsDetailFull.riskFilter ? marksRisk : []}
                    marksValues={fundsDetailFull.riskFilter}
                    maxValue={marksRisk[marksRisk.length - 1]}
                    minValue={marksRisk[marksRisk[0]]}
                    title={'Perfil de risco de fundo'}/>

                <SliderFilter
                    setSearchInput={setSearchMinRetrievalInput}
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
