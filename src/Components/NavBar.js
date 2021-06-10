import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function NavBar() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeBurgerMenu = () => setClick(false)

    return (
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to='/' className="logo-section">
                 <i className="typewriter" src="./typewriter.png"/>
                  ARCADE 
                 <i class="far fa-keyboard"/> 
                </Link>
                <div className='icon' onClick={handleClick}>
                    <i className={click ? 'fab fa-gulp' : 'fas fa-hamburger'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeBurgerMenu}>
                            HOME
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Rules' className='nav-links' onClick={closeBurgerMenu}>
                            RULES
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Contact' className='nav-links' onClick={closeBurgerMenu}>
                            CONTACT
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )
}

export default NavBar
