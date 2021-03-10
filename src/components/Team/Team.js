
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Team = (props) => {
    const {idTeam,strTeam,strTeamBadge,strSport} = props.team;
    const history = useHistory();

    const handleClick = (id)=>{
        const url = `/team/${id}`;
        history.push(url);
        };
    return (
                   
            <Card style={{ width: '18rem' }} className='text-center my-3 p-3' bg='light'>
                <Card.Img variant="top" src={strTeamBadge} />
                <Card.Body>
                    <Card.Title>{strTeam}</Card.Title>
                    <Card.Text>
                        Sports Type: {strSport}                        
                    </Card.Text>
                                        
                    {/* <Button variant="primary"><Link to={'/team/'+idTeam}>Explore<span style={{ margin: '10px' }}></span><FontAwesomeIcon icon={faUsers}></FontAwesomeIcon></Link></Button> */}
                    <Button variant="primary" onClick={() => handleClick(idTeam)}>Explore<span style={{ margin: '10px' }}></span><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></Button>
                </Card.Body>
            </Card>
        
    );
};

export default Team;