import './NavTab.css';

function NavTab() {
    return (
    <nav className='nav-tab'>
        <ul className='nav-tab__ul'>
            <li className='nav-tab__li'><a href='#about-project' className='nav-tab__link'><div className='nav-tab__container'><p className='nav-tab__text'>О проетке</p></div></a></li>
            <li className='nav-tab__li'><a href='#techs' className='nav-tab__link'><div className='nav-tab__container'><p className='nav-tab__text'>Технологии</p></div></a></li>
            <li className='nav-tab__li'><a href='#aboutme' className='nav-tab__link'><div className='nav-tab__container'><p className='nav-tab__text'>Студент</p></div></a></li>
        </ul>
    </nav>
    )
}

export default NavTab;