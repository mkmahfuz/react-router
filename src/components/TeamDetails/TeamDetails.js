import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { Link, useParams } from "react-router-dom";
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './TeamDetails.css';
import female from '../../images/Photo/female.png';
import male from '../../images/Photo/male.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitterSquare, faYoutube } from "@fortawesome/free-brands-svg-icons";


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


    const { strTeam, strTeamBadge, strCountry, strSport, strGender, intFormedYear, strDescriptionEN, strTwitter, strYoutube, strFacebook, strStadiumDescription } = team;
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

        <div>
            <Header logo={strTeamBadge}></Header>

            <Link to='/home'>BacktoHome</Link>
            <a href='http://ppp'>Home</a>
            {
                //TODO
            }

            {
                // console.log(team)
            }

            {/* <div>Banner will be here: <img src={strTeamBanner} alt='banner'></img></div> */}
            {/* <h2>TeamBadge: {strTeamBadge}</h2> */}
            {/* <p>Stadium: <img src={strStadiumThumb} alt='stadium'></img></p> */}
            <Container>
                <Row className='boxTeam'>
                    <Col >
                        <div className='boxText'>
                            <h2>{strTeam}</h2>
                            <p>Founded: {intFormedYear}</p>
                            <p>Country: {strCountry}</p>
                            <p>Sport Type: {strSport}</p>
                            <p>Gender: {strGender}</p>
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
                <Row className=" brand-icon text-center">
                    <Col>
                        <Link to={strFacebook}><FontAwesomeIcon icon={faFacebook} size='2x' color='#3b5998' ></FontAwesomeIcon></Link>
                    </Col>

                    <Link to='jj'>kk</Link>
                    <Col>
                        <FontAwesomeIcon icon={faTwitterSquare} size='2x' color="skyblue" /><Link to={strTwitter}></Link>
                    </Col>
                    <Col>
                        <FontAwesomeIcon icon={faYoutube} size='2x' color="red" /><Link to={strYoutube}></Link>
                    </Col>

                </Row>
                <div className="">

                </div>




            </Container>
            <Footer></Footer>
        </div>
    );
};

export default TeamDetails;