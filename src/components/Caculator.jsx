import React from 'react';
import metaPlay from "../assets/MetaplayWallet.svg";
import vrcn from "../assets/vrcn.png";
import {
    Autocomplete,
    Avatar,
    Box,
    TextField,
    Typography,
    Stack,
} from '@mui/material';
import GenericButton from './GenericButton';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                background: "radial-gradient(100% 100% at 50% 100%,#a1cbfd,#e0e5ff 32.64%,#f1f3f7)",
                p: { xs: 3, sm: 4, md: 6 },
                borderRadius: "24px",


            }}
            className="flex flex-col w-full max-w-7xl rounded-3xl
                    p-3 md:p-3 relative my-10  bg-opacity-30 backdrop-blur-xl "
        >
            <Box className="flex flex-col items-center text-center">
                <Typography variant="h5" fontWeight="bold" mb={1}>
                    Earning Estimator
                </Typography>
                <Typography variant="body1" mb={3}>
                    Potential earnings from current APY
                </Typography>

                <Stack spacing={2} >
                    <Autocomplete
                        disablePortal
                        className=' mb-3 bg-white rounded w-auto md:w-90'
                        value={value}
                        onChange={(e, newValue) => setValue(newValue)}
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
                                    gap: 1,
                                    px: 2,
                                    py: 1,
                                    borderBottom: '1px solid #f0f0f0',
                                    '&:hover': { backgroundColor: '#f5f5f5' },
                                }}
                            >
                                <Avatar src={option.icon} alt={option.label} sx={{ width: 28, height: 28 }} />
                                <Typography fontSize={14}>{option.label}</Typography>
                            </Box>
                        )}
                        isOptionEqualToValue={(option, val) => option.label === val.label}
                    />

                    <TextField
                        placeholder="Enter Amount"
                        variant="outlined"
                        type="number"
                        fullWidth
                        className="bg-white"
                    />

                    {[
                        { label: "3 Months Earning", value: "+ 0.0617 VRCN" },
                        { label: "06 Months Earning", value: "+ 0.0617 VRCN" },
                        { label: "Yearly Earning", value: "+ 0.0617 VRCN" },
                    ].map((item, idx) => (
                        <Box
                            key={idx}
                            display="flex"
                            justifyContent="space-between"
                            px={1}
                        >
                            <Typography>{item.label}</Typography>
                            <Typography color="primary">{item.value}</Typography>
                        </Box>
                    ))}

                    <Box mt={2} display="flex" justifyContent="center">
                        <GenericButton
                            title="Earn Now"
                            PX={5}
                            PY={1.5}
                            btnHandler={() => navigate("/download")}
                        />
                    </Box>
                </Stack>
            </Box>
        </Box>
    );
};

export default Calculator;



{/* {value?.id !== 2 && <FormControl

                    className='mb-3'
                >
                    <InputLabel id="select-age-label">Select Duration</InputLabel>
                    <Select
                        labelId="select-age-label"
                        id="select-age"
                        label="Select Duration"
                        // value={age}
                        // onChange={handleChange}
                        className="bg-white border-0 rounded w-90 mb-3"

                    >
                        <MenuItem value={3}>3 Months</MenuItem>
                        <MenuItem value={6}>6 Months</MenuItem>
                        <MenuItem value={12}>12 Months</MenuItem>
                    </Select>
                </FormControl>} */}