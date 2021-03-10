import React, { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";
const TeamDetails = () => {
    const { id } = useParams();
    const [team, setTeam] = useState({});
    //console.log(id)
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]))
            .catch((error)=>console.log(error)) // TODO:: set proper function to redirect or show error message
    }, [id]);
    const {strTeam,strTeamBadge,strCountry,strSport,strGender,intFormedYear,strDescriptionEN,strTwitter,strYoutube,strFacebook,strTeamBanner,strStadiumThumb} = team;
    return (
        <div>
            {
            //TODO::::::::
        }
            <Link to='/home'>BacktoHome</Link>
            <h1>This is TeamDetails</h1>
            {
                console.log(team)
            }

            <div>Banner will be here: {strTeamBanner}</div>
            <div>
                <h2>TeamBadge: {strTeamBadge}</h2>
                <p>Stadium: {strStadiumThumb}</p>
                <p>Name: {strTeam}</p>
                <p>Founded: {intFormedYear}</p>
                <p>Country: {strCountry}</p>
                <p>Sport Type: {strSport}</p>
                <p>Gender: {strGender}</p>
                <p>Description: {strDescriptionEN}</p>
                <p>twitter: {strTwitter}</p>
                <p>Fb: {strFacebook}</p>
                <p>Yt: {strYoutube}</p>
                <p></p>

            </div>
        </div>
    );
};

export default TeamDetails;