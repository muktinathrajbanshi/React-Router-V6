export const GetAPIData = async() => {
    try {
        fetch(
            "https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1"
        );
    } catch (error) {
        console.log(error);
        
    }
}