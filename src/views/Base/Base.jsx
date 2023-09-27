import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header' 
import Footer  from '../../components/Footer/Footer'
import ScrollToTop from '../../helper/utils/scroll_top';
import { Fragment } from 'react';

const Base = () => {
    return (
        <div className='overflow-y-hidden'>
            <ScrollToTop />
            <Header />
                <Outlet />
            <Footer />
        </div>
    );
};

export default Base;
