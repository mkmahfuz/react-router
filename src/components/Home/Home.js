import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Teams from '../Teams/Teams';
import logo from '../../images/Logo/premierLogo3.jpg';
import bgImage from '../../images/Background/stadium.jpg';

const headerText = 'English Premier League';
const Home = () => {
    return (
        <div>
            <Header logo={logo} bgImage={bgImage} headerText={headerText}></Header>
           
           <Teams></Teams>
           <Footer></Footer>
        </div>
    );
};

export default Home;