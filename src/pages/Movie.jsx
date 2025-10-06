import { useLoaderData } from "react-router-dom";

export const Movie = () => {
    const moviesData = useLoaderData();
    console.log(moviesData);
    
    return <h1>Movie Page</h1>;
};