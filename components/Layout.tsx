import React from 'react';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';


type Props = {
    children: React.ReactNode
};

function Layout({ children }: Props) {
    return (
        <div>
            < Navbar />
            {children}
            < Footer />
        </div >
    )
};

export default Layout;