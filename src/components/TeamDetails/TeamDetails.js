import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link, useParams } from "react-router-dom";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './TeamDetails.css';
import female from '../../images/Photo/female.png';
import male from '../../images/Photo/male.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const TeamDetails = () => {
    const { id } = useParams();
    const [team, setTeam] = useState({});
    //console.log(id)
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]))
            .catch((error) => console.log(error)) // TODO:: set proper function to redirect or show error message
    }, [id]);
    const { strTeam, strTeamBadge, strCountry, strSport, strGender, intFormedYear, strDescriptionEN, strTwitter, strYoutube, strFacebook, strTeamBanner, strStadiumThumb } = team;
    return (

        <div>
            <Header logo={strTeamBadge}></Header>

            <Link to='/home'>BacktoHome</Link>
            {
                //TODO
            }
           
            {
                console.log(team)
            }

            {/* <div>Banner will be here: <img src={strTeamBanner} alt='banner'></img></div> */}
            {/* <h2>TeamBadge: {strTeamBadge}</h2> */}
            {/* <p>Stadium: <img src={strStadiumThumb} alt='stadium'></img></p> */}
            <Container>
                <Row>
                    <Col>
                        <p>Name: {strTeam}</p>
                        <p>Founded: {intFormedYear}</p>
                        <p>Country: {strCountry}</p>
                        <p>Sport Type: {strSport}</p>
                        <p>Gender: {strGender}</p>
                    </Col>
                    <Col>
                    <Image src={male} thumbnail></Image>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <p>Description: {strDescriptionEN}</p>
                    </Col>

                </Row>
                <Row>
                    <Col>
                    KK<FontAwesomeIcon icon={['fab','facebook']}></FontAwesomeIcon>ll
                    {strTwitter}
                    </Col>
                    <Col>
                    {strFacebook}
                    </Col>
                    <Col>
                    {strYoutube}
                    </Col>
                </Row>
                <div className="teamBox">

                </div>

                
                <p>twitter: </p>
                <p>Fb: </p>
                <p>Yt: </p>
                <p></p>

            </Container>
            <Footer></Footer>
        </div>
    );
};

export default TeamDetails;