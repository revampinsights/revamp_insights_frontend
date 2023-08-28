import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header' 
import Footer  from '../../components/Footer/Footer'
import ScrollToTop from '../../helper/utils/scroll_top';
import { Fragment } from 'react';

const Base = () => {
    return (
        <Fragment>
            <ScrollToTop />
            <Header />
                <Outlet />
            <Footer />
        </Fragment>
    );
};

export default Base;
