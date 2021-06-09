import React from 'react';
import { Link } from 'react-router-dom'

function NavBar() {
    return (
        <div>
            <h1>NAVBAR</h1>
            <ul>
                <li>
                    <Link>
                        HOME
                    </Link>
                </li>
                <li>
                    <Link>
                        RULES
                    </Link>
                </li>
                <li>
                    <Link>
                        CONTACT
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar
