/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>
            <h1>Data Table MUI</h1>  

            <ul className='nav'>
                <li>
                    <Link to='/' style={{textDecoration:"none", fontSize:"1.1rem"}}>Home</Link>
                </li>

                <li>
                    <Link to='/details' style={{textDecoration:"none", fontSize:"1.1rem"}}>Details</Link>
                </li>
            </ul>

            

        </div>

    );
}

export default Header;