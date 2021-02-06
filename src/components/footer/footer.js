import React from "react";
import PropTypes from 'prop-types';

import './footer.css';

const FILTER_BTN = [
    {
        id: 'all',
        text: 'Все'
    },
    {
        id: 'active',
        text: 'Активные'
    },
    {
        id: 'completed',
        text: 'Выполненые'
    },
]

const Footer = ({totalTaskCount, activeFilter, changeFilter}) => (
    <div className='footer'>
        <span className='footer__amount__task'>{`Всего: ${totalTaskCount} `}</span>
        <div className='footer__filter'>
            {FILTER_BTN.map( ({id, text}) => (
                <button
                    onClick={ () => {changeFilter(id)}}
                    key={id}
                    className={id === activeFilter ? 'footer__filter__btn active' : 'footer__filter__btn'}>
                {text}</button>
                )
            )}
        </div>
    </div>
)
Footer.propTypes = {
    totalTaskCount: PropTypes.number,
    activeFilter: PropTypes.func,
    changeFilter: PropTypes.func,
}

Footer.defaultProp = {
    totalTaskCount: 0,
    activeFilter: () => {},
    changeFilter: () => {},
}


export default Footer;
