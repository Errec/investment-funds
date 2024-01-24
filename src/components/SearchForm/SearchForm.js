// Modules
import React, {useState} from 'react'

// Styles
import './SearchForm.sass'

// Components
import { Cell } from 'react-foundation';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';

const SearchForm = () => {
    const [searchName, setSearchName] = useState('');

    const handleSearchChange = (value) => {
        setSearchName(value)
    }

    const handleClickSearch = () => {
        alert('SEARCH FOR: ' + searchName);
    }

    return (
        <Cell className="search-form" large={12} medium={12} small={12}>
            <FormControl>
                <InputLabel htmlFor="component-search">Fundo</InputLabel>
                    <Input
                        id="component-search"
                        value={searchName}
                        onChange={(e) => (handleSearchChange(e.target.value))}
                        aria-describedby="component-search-text"
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                color="primary"
                                aria-label="search"
                                onClick={handleClickSearch}
                                >
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                <FormHelperText id="component-search-text">Selecione o fundo para saber o horário limite de aplicação.</FormHelperText>
            </FormControl>
        </Cell>
    )
}

export default SearchForm;