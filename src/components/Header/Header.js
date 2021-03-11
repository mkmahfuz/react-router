import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css';

const Header = (props) => {
    const { logo, bgImage, headerText, navigation } = props;
    const headerStyle = {
        // background: `url(${bgImage})`,
        backgroundImage: 'url(' + bgImage + ')',
        backgroundRepeat: 'no-repeat',
    }
    const headerTextArray = headerText.split('');
    return (
        <header className='header' style={headerStyle}>
            {/*conditional navigation rendering*/}
            {
                navigation && <Navigation></Navigation>
            }
            <img src={logo} alt="logo" />
            <div className='headerText'>
                {
                    headerTextArray.map((letter, idx) => <span key={idx}>{letter}</span>)
                }
            </div>
        </header>
    );
};

export default Header;