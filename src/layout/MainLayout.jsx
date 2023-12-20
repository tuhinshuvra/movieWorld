import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';

const MainLayout = () => {
    return (
        <div className=''>
            <div className='min-vh-100  d-flex flex-column'>
                <Navbar></Navbar>
                <div className='flex-grow-1'>
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;