import '../styles/FilmMenu.css';
import Film from './Film';
import React from 'react';

const filmMenu = (props) => {
    return (
        <div className="FilmMenu">
            {props.films.map(film => {
                return (
                    <Film film={film} selectFilm={props.selectFilm} ratingAverage={props.ratingAverage[film.episode_id - 1]}/>
                );
            })}
        </div>
    );
}

export default filmMenu;