import React from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';


type Props = {
    children: React.ReactNode
};

function Layout({ children }: Props) {
    return (
        <div>
            < Header />
            {children}
            < Footer />
        </div >
    )
};

export default Layout;