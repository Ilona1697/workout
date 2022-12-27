import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import s from './Layout.module.scss';

const Layout = ({ children }) => {
    return (
        <div className={s.wrapper}>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Layout;