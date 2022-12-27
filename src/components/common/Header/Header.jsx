import React from 'react';
import s from './Header.module.scss';
import userImage from '../../../images/header/user.svg';
import burgerImage from '../../../images/header/hamburger.svg';
const Header = () => {
    return (
        <div className={s.header}>
            <button>
                <img src={userImage} alt="Auth" />
            </button>
            <button>
                <img src={burgerImage} alt="Menu" />
            </button>
        </div>
    );
};

export default Header;