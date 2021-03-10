import React, { useEffect, useState } from 'react';
import { CardColumns, Col, Container, Row } from 'react-bootstrap';
import Team from '../Team/Team';

const Teams = () => {
    const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League';
    const [teams, setTeams] = useState([]);
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setTeams(data.teams))
    }, []);
    return (
        //using bootstrap
        <Container>
        <Row>
            <Col >
                <CardColumns>
                {
                    // console.log(teams)
                    teams.map((team) => <Team key={team.idTeam} team={team}></Team>)
                }
                </CardColumns>
            </Col>
        </Row>
        </Container>


    );
};

export default Teams;