import React from 'react';
import Navigation from '../Navigation/Navigation';
// import logo from '../../images/Logo/premierLogo3.jpg';
import './Header.css';
const Header = (props) => {
    // console.log(props.logo)
    const {logo,bgImage,headerText,navigation} = props;    
    const headerStyle = {
        // background: `url(${bgImage})`,
        backgroundImage: 'url('+bgImage+')',
        backgroundRepeat : 'no-repeat',
    }
    const headerTextArray = headerText.split('');
    return (
        <header className='header' style={headerStyle}>
            <img src={logo} alt="logo"/>
            {/* <Navigation></Navigation> */}
          {/* <div className='headerText'> {headerText} </div> */}
          <div className='headerText'>
               {
                   headerTextArray.map((letter,idx)=><span key={idx}>{letter}</span>)               
               } 
          </div>
          {
              navigation && <Navigation></Navigation>
          }
          
        </header>
    );
};

export default Header;