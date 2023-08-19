import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

function MoviesPage() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default MoviesPage