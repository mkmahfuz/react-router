import React from 'react';
// import logo from '../../images/Logo/premierLogo3.jpg';
import './Header.css';
const Header = (props) => {
    // console.log(props.logo)
    const logo = props.logo;    
    return (
        <header className='header'>
            <img src={logo} alt=""/>
            {/* <Navigation></Navigation> */}
           
        </header>
    );
};

export default Header;