import './Header.css'
import Navigation from '../Navigation/Navigation';

function Header({logged}) {
    return(
        <header className="header">
                <Navigation logged={logged} />
        </header>
    )
}

export default Header;