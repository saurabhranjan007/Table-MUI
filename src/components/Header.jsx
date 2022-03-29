/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

    const navStyle = {
        textDecoration:"none", 
        fontSize:"1.2rem", 
        fontFamily:'Roboto', 
        fontWeight:'500',
        color:'#8E62DB',
    }

    return (

        <div>
            <h1 className='header'>Data Table MUI</h1>  

            <ul className='nav'>
                <li>
                    <Link to='/' style={navStyle}>Home</Link>
                </li>

                {/* <li>
                    <Link to='/details' style={{textDecoration:"none", fontSize:"1.1rem"}}>Details</Link>
                </li> */}
            </ul>

        </div>

    );
}

export default Header;