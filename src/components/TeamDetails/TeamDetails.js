import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import {useParams } from "react-router-dom";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './TeamDetails.css';
import female from '../../images/Photo/female.png';
import male from '../../images/Photo/male.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitterSquare, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faClock, faFlag, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons';


const TeamDetails = () => {
    const { id } = useParams();
    const [team, setTeam] = useState({});

    //console.log(id)
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]))
            // .then(console.log(team))
            .catch((error) => console.log(error)) // TODO:: set proper function to redirect or show error message
    }, [id]);


    const { strTeam, strTeamBadge, strCountry, strSport, strGender, intFormedYear, strDescriptionEN, strTwitter, strYoutube, strFacebook, strStadiumDescription ,strTeamLogo,strTeamBanner,strStadiumThumb} = team;
    //console.log(team)

    //conditional image Male vs Female
    //testing the logic 
    // strGender = 'FeMALe';    
    const [teamBoxImage, setTeamBoxImage] = useState(male);
    //const gender;
    useEffect(() => {
        // console.log(teamBoxImage);     
        if (strGender) {
            const gender2 = strGender.toLowerCase() === 'female' ? female : male;
            setTeamBoxImage(gender2);
        }
    }, [strGender]);
    //console.log(teamBoxImage);

    return (

        <>
            <Header logo={strTeamBadge} bgImage={strStadiumThumb} navigation={true} headerText={strTeam?strTeam:''}> </Header>

            {/* <Link to='/home'>Home</Link> */}
            
            {
                //TODO
            }

            {
                console.log(strTeam)
            }

            {/* <div>Banner will be here: <img src={strTeamBanner} alt='banner'></img></div>
            <div>Logo will be here: <img src={strTeamLogo} alt='banner'></img></div>
            <div>Stadium will be here: <img src={strStadiumThumb} alt='banner'></img></div> */}
            {/* <h2>TeamBadge: {strTeamBadge}</h2> */}
            {/* <p>Stadium: <img src={strStadiumThumb} alt='stadium'></img></p> */}
            <Container>
                <Row className='boxTeam'>
                    <Col >
                        <div className='boxText'>
                            <h1>{strTeam}</h1>
                            <p><FontAwesomeIcon icon={faClock} size='lg' /> Founded: {intFormedYear}</p>
                            <p><FontAwesomeIcon icon={faFlag} size='lg' /> Country: {strCountry}</p>
                            <p><FontAwesomeIcon icon={faFutbol} size='lg' /> Sport Type: {strSport}</p>
                            <p><FontAwesomeIcon icon={faMars} size='lg' /> Gender: {strGender}</p>
                        </div>
                    </Col>
                    <Col>
                        <div className='boxImage'>
                            <Image src={teamBoxImage} ></Image>
                        </div>
                    </Col>
                </Row>
                <Row >
                    <Col>
                        <p className='description'>{strDescriptionEN}</p>
                        <p className='description'>{strStadiumDescription}</p>
                    </Col>
                </Row>
                <Row className="text-center mb-5">

                    <Col>
                        <a className='brand-icon' href={'http://' + strTwitter} rel ='noreferrer' target='_blank'> <FontAwesomeIcon icon={faTwitterSquare} size='3x' color="skyblue" /></a>
                        <a className='brand-icon' href={'http://' + strFacebook} rel ='noreferrer' target='_blank'><FontAwesomeIcon icon={faFacebook} size='3x' color='#3b5998' ></FontAwesomeIcon></a>
                        <a className='brand-icon' href={'http://' + strYoutube} rel ='noreferrer' target='_blank'><FontAwesomeIcon icon={faYoutube} size='3x' color="red" /></a>
                    </Col>
                </Row>

            </Container>
            <Footer></Footer>
        </>
    );
};

export default TeamDetails;