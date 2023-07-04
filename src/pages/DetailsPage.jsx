import { Box, Grid, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import useImageColor from 'use-image-color'
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";

const DetailsPage = () => {
    const navigate = useNavigate();
    const { detailPokemon } = useSelector((state) => state.pokemon)

    React.useEffect(() => {
        if (!detailPokemon) {
            navigate('/');
        }
    }, [])

    // this will grab 3 of the most dominant colors
    const { colors } = useImageColor(detailPokemon.sprites.front_default, { cors: true, colors: 2 })

    return (
        <div className="detailspage">
            <TopBar />
            <Box
                sx={{
                    height: '100vh'
                }}
                bgcolor={'#ffe7a3'}
            >
                <Box
                    display='flex'
                    flexDirection="column"
                    alignItems='center'
                    justifyContent='center'
                >
                    <Typography variant="h3" component='div' paddingTop={4}>
                        Pokemon details
                    </Typography>
                    {colors &&
                        <Box sx={{
                            background: `linear-gradient(to right, ${colors[2]}, ${colors[2]})`,
                            width: '500px',
                            marginTop: '20px',
                            textAlign: 'center',
                            padding: "0px",
                            paddingTop: '30px',
                            paddingBottom: "50px",
                            borderRadius: '50px'
                        }}
                        >
                            <Typography variant="h3" sx={{ paddingBottom: "50px" }} component='div'>
                                {detailPokemon.name}
                            </Typography>
                            <img src={detailPokemon.sprites.other.dream_world.front_default} height="240px" alt="image" />

                            <Box sx={{
                                textAlign: 'left',
                                paddingLeft: '65px',
                                paddingBottom: '10px',
                                paddingTop: "30px"
                            }}>
                                <Typography variant="h5" component='div'>
                                    Details
                                </Typography>
                            </Box>
                            <Grid container
                                display='flex'
                                gap={4}
                                direction="row"
                                alignItems='center'
                                justifyContent='center'

                            >
                                <Grid item bgcolor="white" width="100px" p='20px' sx={{ borderRadius: '25px' }}>
                                    <Typography variant="h6" fontSize="15px" component='div'>
                                        Health
                                    </Typography>
                                    <Typography variant="h4" fontSize="25px" component='div' sx={{
                                        color: `${colors[2]}`
                                    }}>
                                        {detailPokemon.stats[0].base_stat}
                                    </Typography>
                                </Grid>
                                <Grid item bgcolor="white" width="100px" p='20px' sx={{ borderRadius: '25px' }}>
                                    <Typography variant="h6" fontSize="15px" component='div'>
                                        Attack
                                    </Typography>
                                    <Typography variant="h4" fontSize="25px" component='div' sx={{
                                        color: `${colors[2]}`
                                    }}>
                                        {detailPokemon.stats[1].base_stat}
                                    </Typography>
                                </Grid>
                                <Grid item bgcolor="white" width="100px" p='20px' sx={{ borderRadius: '25px' }}>
                                    <Typography variant="h6" fontSize="15px" component='div'>
                                        Defense
                                    </Typography>
                                    <Typography variant="h4" fontSize="25px" component='div' sx={{
                                        color: `${colors[2]}`
                                    }}>
                                        {detailPokemon.stats[2].base_stat}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    }
                </Box>
            </Box>
        </div>
    );
}

export default DetailsPage;