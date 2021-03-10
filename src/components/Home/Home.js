import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Teams from '../Teams/Teams';
import logo from '../../images/Logo/premierLogo3.jpg';
const Home = () => {
    return (
        <div>
            <Header logo={logo}></Header>
           <Teams></Teams>
           <Footer></Footer>
        </div>
    );
};

export default Home;