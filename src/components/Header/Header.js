// Modules
import React from 'react';
import './Header.sass';

const Header = () => {
    return (
        <header className="header">
            <div className="header__hero">
                <div className="header__text-box">
                    <h1 className="header__title">FUNDOS DE INVESTIMENTO</h1>
                    <p className="header__legend">Conheça a nossa lista de fundos</p>
                </div>
            </div>
        </header>
    );
};

export default Header;
