import { useEffect, useState } from "react";
import Cardbox from "../components/Cardbox";
import useGetData from "../hooks/useGetData";
import { useSelector } from "react-redux";
import BannerBox from "../components/Banner";
import Message from "../components/MessageBox";
import { Box, Button, Stack, Typography } from "@mui/material";

const HomePage = () => {
    const originalUrl = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0';
    const [url, setUrl] = useState(originalUrl)
    const { isLoading, error } = useGetData(url);
    const { pokemonArray, backUrl, frontUrl, searchKey } = useSelector((state) => state.pokemon)

    //This will sort the pokemonArray by the ID
    const sorting = [...pokemonArray].sort((a, b) => a.id - b.id);

    //This removes duplicate values. 
    const sortedArray = Array.from(new Set(sorting.map(a => a.id)))
        .map(id => {
            return sorting.find(a => a.id === id)
        })

    // i wanna put this in useEffect to run it once. cus its re running multiple times like this.  

    const prePage = () => {
        setUrl(backUrl)
    }
    const nextPage = () => {
        setUrl(frontUrl)
    }

    useEffect(() => {
        if (searchKey == 'all') {
            setUrl(originalUrl)
        } else {
            setUrl(`https://pokeapi.co/api/v2/pokemon/` + searchKey)
            console.log(url)
        }
    }, [searchKey])

    return (
        <div className="homepage">
            <BannerBox />
            <Box
                bgcolor="#ffe7a3"
            >
                <Message error={error} loading={isLoading} />
                {sortedArray &&
                    <>
                        <Box
                            display='flex'
                            alignItems='center'
                            justifyContent='center'
                            paddingTop={4}
                        >
                            <Stack direction='row' gap={4}>
                                {backUrl && <Button onClick={prePage} variant="contained">Previous</Button>}
                                {frontUrl && <Button onClick={nextPage} variant="contained">Next</Button>}
                            </Stack>
                        </Box>
                        <Box
                            display='flex'
                            alignItems='center'
                            justifyContent='center'
                            paddingTop={4}
                        >
                            <Typography variant="h6">
                                Showing Results for {searchKey}
                            </Typography>
                        </Box>
                    </>
                }
                {sortedArray && <Cardbox data={sortedArray} />}
                <Box
                    display='flex'
                    alignItems='center'
                    justifyContent='center'
                    paddingTop={4}
                    paddingBottom={8}
                >
                    <Stack direction='row' gap={4}>
                        {backUrl && <Button onClick={prePage} variant="contained">Previous</Button>}
                        {frontUrl && <Button onClick={nextPage} variant="contained">Next</Button>}
                    </Stack>
                </Box>
            </Box>
        </div>
    );
}

export default HomePage;