import {gql, useQuery} from '@apollo/client'
import Details from './Details'
import { Accordion, AccordionSummary, AccordionDetails, Box, Typography, CircularProgress } from '@mui/material'
  
function SearchResults(params){
  const MOVIE_SEARCH = gql`
    query SearchMovies {
      searchMovies(query: "${params.searchField}") {
          id
          name
          score
          genres{
            name
          }
        }
      }
  `

  const {loading, error, data} = useQuery(MOVIE_SEARCH)

  if (loading) return <CircularProgress sx={{alignSelf: "center"}}></CircularProgress>
  if (error) return <Box>Error!</Box>

  return (
      data.searchMovies.map( ({id, name, genres, score}) => (
          <Accordion key={id} sx={{color:"white", borderRadius:"10px", width: "60%", alignSelf:"center"}}>
            <AccordionSummary sx={{bgcolor:"#212121", borderRadius:"10px"}}>
              <div sx={{justifyItems:"space-between"}}>
                <Typography component={"h4"}>{name} </Typography>
                <Typography>Rating: {score === 0 ? "No ratings" : score} | Categories:{genres.length === 0 ? " No categories" : genres.map(({name}) => ` ${name},`)}</Typography>
              </div>           
            </AccordionSummary>
            <AccordionDetails sx={{borderRadius:"10px", bgcolor: "#1976d2", color:"white"}}>
              <Details title={name} />
            </AccordionDetails>
          </Accordion>
      )))
}

export default SearchResults