import React from 'react'
import metaPlay from "../assets/MetaplayWallet.svg"
import vrcn from "../assets/vrcn.png"
import { Autocomplete, Avatar, Box, Button, FormControl, Input, InputLabel, MenuItem, Select, Stack, TextField, Typography } from '@mui/material'


const coinOptions = [
    {
        id: 1,
        label: 'VRCN',
        icon: vrcn,
        percentage: 0,
    },
    {
        id: 2,
        label: 'MetaPlay',
        icon: metaPlay,
        percentage: 3,
    },
];


const Calculator = () => {
    const [value, setValue] = React.useState(coinOptions[0]);

    return (

        <Box sx={{
            background: "radial-gradient(100% 100% at 50% 100%,#a1cbfd,#e0e5ff 32.64734820868138%,#f1f3f7)"
        }}
            my={10}
            className="flex flex-col w-full max-w-7xl rounded-3xl
                    p-3 md:p-3 relative  bg-opacity-30 backdrop-blur-xl "
        // shadow-[0px_4px_184px_#a9abb522]
        >
            <Box className="p-10 flex flex-col justify-center items-center">
                <Typography
                    textAlign="center" variant='h5' mb={2}>
                    Earning Estimator
                </Typography>
                <Typography textAlign="center" variant='body1' mb={2}>
                    Potential earnings from current APR*s
                </Typography>
                <Autocomplete
                    disablePortal
                    className='relative  bg-white rounded w-90'
                    value={value}
                    // freeSolo
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    options={coinOptions}
                    getOptionLabel={(option) => option.label}

                    renderInput={(params) => (
                        <TextField {...params} label="Select Asset" variant="outlined" />
                    )}
                    renderOption={(props, option) => (
                        <Box
                            component="li"
                            {...props}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                // justifyContent: 'space-between',
                                px: 2,
                                py: 1,
                                borderBottom: '1px solid #f0f0f0',
                                transition: 'all 0.2s ease-in-out',
                                '&:hover': {
                                    backgroundColor: '#f5f5f5',
                                },
                            }}
                        >
                            {/* Left Side: Icon + Label */}
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                <Avatar
                                    src={option.icon}
                                    alt={option.label}
                                    sx={{ width: 28, height: 28 }}
                                />
                                <Typography fontWeight={500} fontSize={14}>
                                    {option.label}
                                </Typography>
                            </Box>
                        </Box>
                    )}

                    isOptionEqualToValue={(option, value) => option.label === value.label}
                    renderTags={() => null}
                    renderValue={(option) => (
                        <Box sx={{ position: "reltive", display: 'flex', alignItems: 'center', gap: 1, justifyContent: "space-between" }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: "space-between", }}>
                                <Avatar src={option?.icon} alt={option?.label} sx={{ width: 35, height: 35 }} />
                                <Typography variant="body1">{option?.label}</Typography>
                            </Box>
                            <Typography
                                variant="body1"
                                position="absolute"
                                right={65}
                                color='primary'
                            >
                                {option?.percentage === 0 ? "" : `${option?.percentage}%`}
                            </Typography>
                        </Box>
                    )}
                />
                <FormControl

                    sx={{ marginY: 3 }}
                >
                    <InputLabel id="select-age-label">Select Duration</InputLabel>
                    <Select
                        labelId="select-age-label"
                        id="select-age"
                        label="Select Duration"
                        // value={age}
                        // onChange={handleChange}
                        className="bg-white border-0 rounded w-90"

                    >
                        <MenuItem value={3}>3 Months</MenuItem>
                        <MenuItem value={6}>6 Months</MenuItem>
                        <MenuItem value={12}>12 Months</MenuItem>
                    </Select>
                </FormControl>


                <TextField

                    placeholder="Enter Amount"
                    variant="outlined"
                    className='w-90 bg-white mb-5  border-0  rounded'
                    type='number'

                />





                <Box className='flex justify-between mt-5  w-90'>
                    <Typography
                        variant='body1' mb={2}>
                        Daily Earnings
                    </Typography>
                    <Typography variant='body1' color='primary' mb={2}>
                        + 0.002617 AXL
                    </Typography>
                </Box>
                <Box className='flex justify-between   w-90'>
                    <Typography
                        variant='body1' mb={2}>
                        Monthly Earnings
                    </Typography>
                    <Typography variant='body1' color='primary' mb={2}>
                        + 0.002617 AXL
                    </Typography>
                </Box>
                <Box className='flex justify-between  mb-5 w-90'>
                    <Typography
                        variant='body1' mb={2}>
                        Yearly Earnings
                    </Typography>
                    <Typography variant='body1' color='primary' mb={2}>
                        + 0.002617 AXL
                    </Typography>
                </Box>

                <Button

                    loading={false}
                    onClick={function () { }}
                    size="lg"
                    variant="solid"
                    sx={{
                        textTransform: "none",
                        background: "#1976d2",
                        color: "white",
                        padding: "10px 40px ",
                        borderRadius: "30px"

                    }}
                >
                    Earn Now
                </Button>
            </Box>
        </Box>

    )
}

export default Calculator
