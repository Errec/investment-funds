// Modules
import React, {useState, useCallback} from 'react'
import throttle from "lodash/throttle";

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

const SearchForm = (props) => {
    const {
        setSearchInput
    } = props;
    const [searchName, setSearchName] = useState('');

    const throttleHandler = useCallback(
      throttle((value) => {
        setSearchInput(value);
      }, 1000),
      []
    );

    const handleSearchChange = useCallback((e) => {
        const value = e.target.value;
        setSearchName(value);
        setTimeout(() => {
            throttleHandler(value);
        }, 600);
      },
      [throttleHandler]
    );

    return (
        <Cell className="search-form" large={12} medium={12} small={12}>
            <FormControl>
                <InputLabel htmlFor="component-search">Fundo</InputLabel>
                    <Input
                        id="component-search"
                        value={searchName}
                        onChange={handleSearchChange}
                        aria-describedby="component-search-text"
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                color="primary"
                                aria-label="search"
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