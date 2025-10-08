import { useLoaderData } from "react-router-dom";

export const MovieDetails = () => {

    // const params = useParams();
    // console.log(params);
    

    const movieData = useLoaderData();
    console.log(movieData);
    

    return <h1>Hello Movie {params.movieID} </h1>;
};