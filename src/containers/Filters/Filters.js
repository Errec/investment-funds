// Modules
import React from 'react'

// Styles
    import './Filters.sass'

// Components
import SearchForm from '../../components/SearchForm/SearchForm'
import { Grid, Cell } from 'react-foundation';
import Paper from '@material-ui/core/Paper';

const Filters = (props) => {
    return (
        <Paper className="filters" elevation={1}>
            <Grid>
                <SearchForm></SearchForm>
            </Grid>
        </Paper>
    )
}

export default Filters

