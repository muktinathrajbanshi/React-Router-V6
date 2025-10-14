import { useLoaderData } from "react-router-dom";
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
                        <img src={Poster} alt="Rambo" className="movie_img" />
                    </div>
                    <div className="movie__content">
                        <div className="movie__title">
                            <h1>
                                {Title} <i className="fas fa-fire"></i>
                            </h1>
                            <div className="movie__tag movie__tag--1">{`#${Type}`}</div>
                            <div className="movie__tag movie__tag--2">Year: {Year}</div>
                        </div>
                        <div className="movie__description">{Plot}</div>
                        <br />
                        <p className="movie__description">Awards: {Awards}</p>
                        <div className="movie__details">
                            <p className="movie__detail">
                                <span className="icons icons-red">
                                    <i className="fas fa-camera-retro"></i>
                                </span>
                                Rating: {imdbRating}
                            </p>
                            <p className="movie__detail">
                                <span className="icons icons-grey">
                                    <i className="fas fa-clock"></i>
                                </span>
                            </p>
                        </div>
                    </div>
                </figure>
                
                <div className="ticket-container">
                    <div className="ticket__content">
                        <h4 className="ticket__movie-title">{Title}</h4>
                        <p>{Plot}</p>
                        <p className="ticket__current-price">Type: </p>
                        <p className="ticket__current-price">Type: </p>
                        <button className="ticket__buy-btn">Watch now</button>
                    </div>
                </div>
            </div>
        </li>
    )
};