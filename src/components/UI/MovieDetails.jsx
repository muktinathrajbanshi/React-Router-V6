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
                    <img src={Poster} alt="Rambo" />
                 </div>
               </figure>
            </div>
        </li>
    )
};