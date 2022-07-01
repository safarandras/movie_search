import { Box } from "@mui/material";
import { useState, useEffect } from "react";

function Details(props){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [item, setItem] = useState([]);
    const [title] = useState(props.title)

    useEffect(() => {
        fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${title}`)
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setItem(result);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])
    
    if (error) return <Box>Error: {error.message}</Box>
    
    else if (!isLoaded) return <Box>Loading...</Box>;
    
    else return (
    <Box sx={{alignText: "center"}}>
        {item.extract === undefined ? "No summary" : item.extract}
        <br/><br/>
        <a href={`https://en.wikipedia.org/wiki/${title}`} rel="noreferrer" target="_blank">Wikipedia</a> | <a href={`https://www.imdb.com/find?q=${title.replace("_", "+")}`} rel="noreferrer" target="_blank">IMDB</a>
    </Box>
    )
}

export default Details