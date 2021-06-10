import React from 'react';
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div>
            <h1>NAVBAR</h1>
            <ul>
    
                    <Link to="/">
                        HOME
                    </Link>

                    <Link to="/rules">
                        RULES
                    </Link>
         
                    <Link to="/contact">
                        CONTACT
                    </Link>
              
            </ul>
        </div>
    )
}

export default NavBar
