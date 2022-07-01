import { useState } from "react";
import SearchResults from "../components/Search";
import { Box, IconButton, Stack, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

function Index(){
    const [searchField, setSearchField] = useState("");

    const runSearch = e => {
        setSearchField(e.target.value);
    };
    return(
        <Box>
            <Stack spacing={2}>
                <Stack direction="row" spacing={2} justifyContent="center" sx={{margin: "20px"}}>
                    <TextField id="outlined-basic" label="Search Movies" variant="outlined" onChange={runSearch} sx={{width: "30%"}} />
                    <IconButton onClick={runSearch}><SearchIcon fontSize="large" className="search" /></IconButton>
                </Stack>
                {searchField === "" ? "": <SearchResults searchField={searchField} />  }
            </Stack>
        </Box>
    )
}

export default Index