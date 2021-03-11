import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { useParams } from "react-router-dom";
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
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]))
            .catch((error) => console.log(error)) // TODO:: set proper function to redirect or show error message
    }, [id]);

    //destructuring the team object
    const { strTeam, strTeamBadge, strCountry, strSport, strGender, intFormedYear, strDescriptionEN, strTwitter, strYoutube, strFacebook, strStadiumDescription, strStadiumThumb } = team;

    //conditional rendering of Male vs Female Image  using state and effect hook   
    const [teamBoxImage, setTeamBoxImage] = useState(male);
    useEffect(() => {
        if (strGender) {
            const gender2 = strGender.toLowerCase() === 'female' ? female : male;
            setTeamBoxImage(gender2);
        }
    }, [strGender]);


    return (
        <>
            <Header logo={strTeamBadge} bgImage={strStadiumThumb} navigation={true} headerText={strTeam ? strTeam : ''}> </Header>
            <Container>
                <Row className='boxTeam'>
                    <Col sm={7} >
                        <div className='boxText'>
                            <h1>{strTeam}</h1>
                            <p><FontAwesomeIcon icon={faClock} size='lg' /> Founded: {intFormedYear}</p>
                            <p><FontAwesomeIcon icon={faFlag} size='lg' /> Country: {strCountry}</p>
                            <p><FontAwesomeIcon icon={faFutbol} size='lg' /> Sport Type: {strSport}</p>
                            <p><FontAwesomeIcon icon={faMars} size='lg' /> Gender: {strGender}</p>
                        </div>
                    </Col>
                    <Col sm={5}>
                        <div className='boxImage'>
                            {/* <Image src={strGender && strGender.toLowerCase === 'male' ? male : female}></Image> */}
                            {/*conditionalion rendering of img src male vs female coming from-- teamBoxImage */}
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
                        <a className='brand-icon' href={'http://' + strTwitter} rel='noreferrer' target='_blank'> <FontAwesomeIcon icon={faTwitterSquare} size='3x' color="skyblue" /></a>
                        <a className='brand-icon' href={'http://' + strFacebook} rel='noreferrer' target='_blank'><FontAwesomeIcon icon={faFacebook} size='3x' color='#3b5998' /></a>
                        <a className='brand-icon' href={'http://' + strYoutube} rel='noreferrer' target='_blank'><FontAwesomeIcon icon={faYoutube} size='3x' color="red" /></a>
                    </Col>
                </Row>

            </Container>
            <Footer></Footer>
        </>
    );
};

export default TeamDetails;