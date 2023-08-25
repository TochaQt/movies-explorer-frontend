import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

function MainPage( {logged} ) {
    return (
        <>
            <Header logged={logged} />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainPage