import { Outlet } from 'react-router-dom';
import Header from '../Header/Header'

function ProfilePage() {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default ProfilePage