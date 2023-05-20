import {Outlet } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';

function Layout(props) {
    return (
        <>
            <Header />
                <Outlet />
                {props.children}
            <Footer />

        </>    
    )
};

export default Layout;