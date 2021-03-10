import React from 'react';
import { Link } from 'react-router-dom';

const Teams = () => {
    return (
        <div>
            <h1>This is teams</h1>
            <Link to='/team/1'>Teamdetails</Link>
        </div>
    );
};

export default Teams;