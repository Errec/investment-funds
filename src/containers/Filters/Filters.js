// Modules
import React from 'react'

// Styles
    import './Filters.sass'

// Components
import SearchForm from '../../components/SearchForm/SearchForm'
import SliderFilter from '../../components/SliderFilter/SliderFilter'
import { Grid } from 'react-foundation';
import Paper from '@material-ui/core/Paper';

const Filters = (props) => {
    return (
        <Paper className="filters" elevation={1}>
            <Grid>
                <SearchForm></SearchForm>
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

export default Filters

