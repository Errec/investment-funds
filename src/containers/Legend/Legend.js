// Modules
import React from 'react';
import shortid from 'shortid';

// Components
import StarCircleIcon from 'mdi-react/StarCircleIcon';
import EarthPlusIcon from 'mdi-react/EarthPlusIcon';
import InformationOutlineIcon from 'mdi-react/InformationOutlineIcon';
import BlockHelperIcon from 'mdi-react/BlockHelperIcon';
import ReplyCircleIcon from 'mdi-react/ReplyCircleIcon';
import { Grid, Cell } from 'react-foundation';

// Styles
import './Legend.sass';
const legends = [
    {
        icon: StarCircleIcon,
        description: 'Fundo para investidor qualificado',
        color: '#639d31',
        iconName: 'star',
    },
    {
        icon: InformationOutlineIcon,
        description: 'Entenda o resgate deste fundo',
        color: '#505152',
        iconName: 'info',
    },
    {
        icon: BlockHelperIcon,
        description: 'Fundo fechado para aplicação',
        color: '#9c9d9e',
        iconName: 'block',
    },
    {
        icon: ReplyCircleIcon,
        description: 'Aplicar neste fundo',
        color: '#119c9f',
        iconName: 'reply',
    },
]

const Legend = () => {
    return (
        <Grid className="legend">
            <Cell className="legend__list" large={9} medium={9} small={12}>
                <p className="legend__title">
                    <strong>LEGENDA</strong>
                </p>
                <Grid className="legend__list--1">
                    {legends.map((item, index) => 
                        <Cell className={"legend__item"} large={3} medium={3} small={12} key={shortid.generate()}>
                            <item.icon key={shortid.generate()} className={`legend__icon legend__icon--${item.iconName}`} size={20} color={item.color}/>
                            <p  key={shortid.generate()} className={"legend__description"}>{item.description}</p>
                        </Cell>)}
                </Grid>
                <Grid className="legend__list--2">
                    <Cell className={"legend__item"} large={3} medium={3} small={12}>
                        <EarthPlusIcon className={"legend__icon legend__icon--earth"} size={20} color={'#639d31'}/>
                        <p className={"legend__description"}>Investimento ESG (Environmental, Social and Governance)</p>
                    </Cell>
                </Grid>
            </Cell>
        </Grid>
    );
};

export default Legend;

