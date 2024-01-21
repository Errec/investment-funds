// Modules
import React from 'react';
import { Grid, Cell } from 'react-foundation';

// Styles
import './Header.sass';

const Header = () => {
    return (
        <header className="header">
            <Grid className="header__hero">
                <Cell className="text--center" small={12} medium={12} large={12}>
                    <h1 className="header__title">FUNDOS DE INVESTIMENTO</h1>
                    <p className="header__legend">Conheça a nossa lista de fundos</p>
                </Cell>
            </Grid>
        </header>
    );
};

export default Header;

