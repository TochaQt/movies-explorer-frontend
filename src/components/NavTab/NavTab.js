import './NavTab.css';

function NavTab() {
    return (
    <nav className='nav-tab'> 
        <a href='#about-project' className='nav-tab__link'><div className='nav-tab__container'><p className='nav-tab__text'>О проетке</p></div></a>
        <a href='#techs' className='nav-tab__link'><div className='nav-tab__container'><p className='nav-tab__text'>Технологии</p></div></a>
        <a href='#aboutme' className='nav-tab__link'><div className='nav-tab__container'><p className='nav-tab__text'>Студент</p></div></a>
    </nav>
    )
}

export default NavTab;