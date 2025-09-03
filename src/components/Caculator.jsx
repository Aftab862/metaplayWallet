import React, { useEffect, useState } from "react";
import metaPlay from "../assets/MetaplayWallet.svg";
import vrcn from "../assets/vrcn.png";
import {
    Autocomplete,
    Avatar,
    Box,
    TextField,
    Typography,
    Stack,
} from "@mui/material";
import GenericButton from "./GenericButton";
import { useNavigate } from "react-router-dom";

const coinOptions = [
    {
        id: 1,
        label: "VRCN",
        icon: vrcn,
    },
    {
        id: 2,
        label: "MetaPlay",
        icon: metaPlay,
    },
];

const Calculator = () => {
    const [value, setValue] = useState(coinOptions[0]);
    const [inputValue, setInputValue] = useState(0);
    const [calculatedValues, setCalculatedValues] = useState([0, 0, 0]); // just numbers
    const navigate = useNavigate();

    // Constants
    const EarningValue1 = 3; // %
    const EarningValue2 = 5; // %
    const EarningValue3 = 10; // %
    const MetaPlayEarningPercentage = 1; // 1% daily
    const MetaPlay3Months = 90;
    const MetaPlay6Months = 180;
    const MetaPlay12Months = 365;
    const maxLimit = 10000000000;

    useEffect(() => {
        const userValue = Number(inputValue);

        if (userValue > 0 && userValue <= maxLimit) {
            let num1, num2, num3;

            if (value.id === 1) {
                num1 = (userValue * EarningValue1) / 100;
                num2 = (userValue * EarningValue2) / 100;
                num3 = (userValue * EarningValue3) / 100;
            } else if (value.id === 2) {
                const daily = (userValue * MetaPlayEarningPercentage) / 100;
                num1 = daily * MetaPlay3Months;
                num2 = daily * MetaPlay6Months;
                num3 = daily * MetaPlay12Months;
            }

            setCalculatedValues([num1.toFixed(2), num2.toFixed(2), num3.toFixed(2)]);
        } else {
            setCalculatedValues([0, 0, 0]);
        }
    }, [value, inputValue]);


    const InputHandler = (e) => {
        let val = Number(e.target.value);
        if (val <= 0) {
            setInputValue(0);
        } else if (val > maxLimit) {
            setInputValue(maxLimit);
        } else {
            setInputValue(val);
        }
    };

    const labels = ["3 Months Earning", "06 Months Earning", "Yearly Earning"];

    return (
        <Box
            sx={{
                background:
                    "radial-gradient(100% 100% at 50% 100%,#a1cbfd,#e0e5ff 32.64%,#f1f3f7)",
                p: { xs: 3, sm: 4, md: 6 },
                borderRadius: "24px",
            }}
            className="flex flex-col w-full max-w-7xl rounded-3xl p-3 md:p-3 relative my-10 bg-opacity-30 backdrop-blur-xl "
        >
            <Box className="flex flex-col items-center text-center">
                <Typography variant="h5" fontWeight="bold" mb={1}>
                    Earning Estimator
                </Typography>
                <Typography variant="body1" mb={3}>
                    Potential earnings from current APY
                </Typography>

                <Stack spacing={2}>
                    <Autocomplete
                        disablePortal
                        className="mb-3 bg-white rounded w-auto md:w-90"
                        value={value}
                        onChange={(e, newValue) => setValue(newValue)}
                        options={coinOptions}
                        getOptionLabel={(option) => option.label}
                        renderInput={(params) => (
                            <TextField {...params} label="Select Asset" variant="outlined" />
                        )}
                        renderOption={(props, option) => {
                            const { key, ...rest } = props; // extract key
                            return (
                                <Box
                                    key={key}
                                    component="li"
                                    {...rest}
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 1,
                                        px: 2,
                                        py: 1,
                                        borderBottom: "1px solid #f0f0f0",
                                        "&:hover": { backgroundColor: "#f5f5f5" },
                                    }}
                                >
                                    <Avatar
                                        src={option.icon}
                                        alt={option.label}
                                        sx={{ width: 28, height: 28 }}
                                    />
                                    <Typography fontSize={14}>
                                        {option.label}
                                        {option.percentage ? ` (${option.percentage}%)` : ""}
                                    </Typography>
                                </Box>
                            );
                        }}
                        isOptionEqualToValue={(option, val) => option.label === val.label}
                    />


                    <TextField
                        placeholder="0"
                        variant="outlined"
                        type="number"
                        fullWidth
                        className="bg-white"
                        inputProps={{ min: 0 }}
                        onChange={InputHandler}
                        value={inputValue}
                    />

                    {labels.map((label, idx) => (
                        <Box
                            key={label}
                            display="flex"
                            justifyContent="space-between"
                            px={1}
                        >
                            <Typography>{label}</Typography>
                            <Typography color="primary">
                                + {calculatedValues[idx]} VRCN
                            </Typography>
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