import React from 'react';
import './Header.css';

const Header = () => {
    return(
        <div className='header'>
            <ul>
                <li className='name'>Name</li>
                <li className='email'>Email</li>
                <li className='address'>Address</li>
            </ul>
        </div>
    )
}
export default Header