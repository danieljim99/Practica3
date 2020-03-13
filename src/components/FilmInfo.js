import Characters from './Characters';
import '../styles/FilmInfo.css';
import Rating from './Rating';
import React from 'react';

const filmInfo = (props) => {
    return (
        <div id="FilmInfo" className="FilmInfo">
            <img className="GoBack" src="https://www.kindpng.com/picc/m/80-805814_x-button-svg-png-red-x-circle-icon.png" alt="Go back" onClick={props.goBack.bind(this)}/>
            <div className="FilmData">
                <img className="FilmInfoImage" src={props.film.image} alt={props.film.title}/>
                <div className="FilmText">
                    <div><b>Title: </b>{props.film.title}</div>
                    <div><b>Episode: </b>{props.film.episode_id}</div>
                    <div><b>Release: </b>{props.film.release_date}</div>
                    <div><b>Beginning: </b>{props.film.opening_crawl}</div>
                </div>
            </div>
            <div className="FilmRate">
                <Rating ratingAverage={props.ratingAverage} rate={props.rate}/>
                <div className="FilmRateVotes">({props.votes})</div>
            </div>
            <Characters characters={props.film.characters}/>
        </div>
    );      
}

export default filmInfo;