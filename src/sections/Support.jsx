import { Box, Divider, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

const Support = () => {
    const cards = [
        {
            title: 'Getting Started',
            description: 'All the essentials you’ll need as you begin your metaplaywallet journey',
        },
        {
            title: 'IOS & Android',
            description: 'Guides and FAQ to help you use the metaplaywallet app and navigate the new world of Web3 and Ethereum',
        },
        {
            title: 'Browser Extension',
            description: 'Your guide to metaplaywallet’s extension. Unlock your Ethereum superpowers with a wallet built for pros',
        },
    ];

    return (
        <Box>

            <Box height="40vh" bgcolor="#577df4" justifyContent="center" display="flex" alignItems="center">
                <Typography
                    variant='h4'
                    sx={{
                        fontWeight: "700",
                        color: "white",
                        padding: "20px",
                        textAlign: "center"
                    }}
                >
                    Guides and support from Metaplay
                </Typography>
            </Box>

            <Box className="flex-col justify-between  items-center">


                <Box className="flex justify-center py-5 items-center">

                    <Grid maxWidth="md" container mt={3}>
                        {cards.map((card, index) => (
                            <Grid item size={{ xs: 12, sm: 8, md: 4 }} key={index} className="p-5">
                                <Paper
                                    elevation={1}
                                    sx={{
                                        p: 3,
                                        transition: '0.3s',
                                        borderRadius: 2,
                                        height: "100%",
                                        '&:hover': {
                                            boxShadow: 6,
                                        },
                                    }}
                                >
                                    <Typography variant="h6" fontWeight="600" mb={1} sx={{
                                        wordBreak: "break-word",
                                        wordWrap: "break-word",

                                    }}>
                                        {card.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {card.description}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>

                </Box>



                <Typography textAlign="center" mt={5}>
                    Can't find what you're looking for?
                    Email us at  : <a href="mailto:support@metaplaywallet.org" className="text-blue-600 underline me-1">support@metaplaywallet.org</a>
                    for any assistance.
                </Typography>
            </Box>
        </Box>

    )
}

export default Support
