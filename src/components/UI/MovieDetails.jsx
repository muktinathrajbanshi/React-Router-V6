import { NavLink, useLoaderData } from "react-router-dom";
import "../UI/Card.css";

export const MovieDetails = () => {
    const movieData = useLoaderData();
    console.log(movieData);
    
    const { Actor, Poster, Title, Type, Year, Plot, BoxOffice, imdbID } = movieData;

    return (
        <li className="hero-container hero-movie-container">
            <div className="main-container">
               <figure className="movie">
                 <div className="movie__hero">
                    <img src={Poster} alt="Rambo" className="movie__img" />
                 </div>
                 <div className="movie__content">
                    <div className="movie__title">
                        <h1 className="heading__primary">
                            {Title} <i className="fas fa-fire"></i>
                        </h1>
                        <div className="movie__tag movie__tag--1">{`#${Type}`}</div>
                        <div className="movie__tag movie__tag--2">Year: {Year}</div>
                    </div>
                    <div className="movie__description">{Plot}</div>
                    <br />
                    <p className="movie__description">Awards: {Awards}</p>
                 </div>
               </figure>
            </div>
        </li>
    )
};