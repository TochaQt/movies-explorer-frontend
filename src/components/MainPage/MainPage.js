import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

function MainPage() {
    return (
        <>
                        <Header />
                        <Outlet />
                        <Footer />
        </>
    )
}

export default MainPage