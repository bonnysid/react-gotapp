import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className="header__block">
            <h3 className="header__title">
                <a href="#">
                Game of Thrones DB
                </a>
            </h3>
            <ul className="header__link">
                <li>
                    <a href="#">Characters</a>
                </li>
                <li>
                    <a href="#">Houses</a>
                </li>
                <li>
                    <a href="#">Books</a>   
                </li>
            </ul>
        </div>
    );
};

export default Header;