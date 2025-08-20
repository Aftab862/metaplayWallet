import { Typography } from "@mui/material";
import React from "react";
import Marquee from "react-fast-marquee";
import useMediaQuery from '@mui/material/useMediaQuery';


const coinsRow1 = [
    { id: "btc", name: "Bitcoin" },
    { id: "eth", name: "Ethereum" },
    { id: "bnb", name: "BNB" },
    { id: "ada", name: "Cardano" },
    { id: "sol", name: "Solana" },
    { id: "doge", name: "Dogecoin" },
    { id: "avax", name: "Avalanche" },
    { id: "trx", name: "TRON" },
    { id: "xmr", name: "Monero" },
    { id: "atom", name: "Cosmos" },
    { id: "icp", name: "ICP" },
    { id: "etc", name: "Ethereum Classic" },
    { id: "vet", name: "VeChain" },
    { id: "grt", name: "The Graph" },
    { id: "aave", name: "Aave" },
    { id: "qnt", name: "Quant" },
];

const coinsRow2 = [
    { id: "dot", name: "Polkadot" },
    { id: "ltc", name: "Litecoin" },
    { id: "link", name: "Chainlink" },
    { id: "xlm", name: "Stellar" },
    { id: "matic", name: "Polygon" },
    { id: "dai", name: "DAI" },
    { id: "mkr", name: "Maker" },
    { id: "fil", name: "Filecoin" },
    { id: "algo", name: "Algorand" },
    { id: "uni", name: "Uniswap" },
    { id: "miota", name: "IOTA" },
    { id: "neo", name: "NEO" },
    { id: "xtz", name: "Tezos" },
    { id: "mana", name: "Decentraland" },
    { id: "eos", name: "EOS" },
    { id: "theta", name: "Theta" },
    { id: "zec", name: "Zcash" },
    { id: "crv", name: "Curve DAO" },
];

function coinImgUrl(id) {
    return `https://cdn.jsdelivr.net/gh/spothq/cryptocurrency-icons@master/svg/color/${id}.svg`;
}


export default function CryptoMarquee() {
    const matches = useMediaQuery('(min-width:600px)');

    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
        textAlign: "center",
        fontSize: "14px",
        minWidth: "100px",
        margin: matches ? "20px" : "4px",
    };

    const imgStyle = {
        width: matches ? 70 : 50,
        height: matches ? 70 : 50,
        transition: "transform 0.3s ease",
    };

    const handleHover = (e) => {
        e.currentTarget.querySelector("img").style.transform = "scale(1.2)";
        e.currentTarget.querySelector("span").style.transform = "scale(1.1)";
    };

    const handleLeave = (e) => {
        e.currentTarget.querySelector("img").style.transform = "scale(1)";
        e.currentTarget.querySelector("span").style.transform = "scale(1)";
    };

    const repeatCoins = (coins, times = 4) =>
        Array(times).fill(coins).flat();

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "40px",
                width: "100%",
                padding: "50px 0",
            }}
        >
            <Typography variant="h4" fontWeight="600" mb={matches ? 5 : 2}>
                Supporting Coins
            </Typography>

            <Marquee pauseOnHover speed={40} gradient={matches}
                style={{ width: matches ? "85%" : "100%" }}

            >
                {repeatCoins(coinsRow1).map(({ id, name }, index) => (
                    <div
                        key={`${id}-${index}`}
                        style={containerStyle}
                        onMouseEnter={handleHover}
                        onMouseLeave={handleLeave}
                    >
                        <img src={coinImgUrl(id)} alt={name} style={imgStyle} />
                        <span
                            style={{
                                transition: "transform 0.3s ease",
                                fontWeight: 500,
                            }}
                        >
                            {name}
                        </span>
                    </div>
                ))}
            </Marquee>

            <Marquee
                pauseOnHover
                speed={40}
                direction="right"
                gradient={matches}
                style={{ width: matches ? "85%" : "100%" }}
            >
                {repeatCoins(coinsRow2).map(({ id, name }, index) => (
                    <div
                        key={`${id}-${index}`}
                        style={containerStyle}
                        onMouseEnter={handleHover}
                        onMouseLeave={handleLeave}
                    >
                        <img src={coinImgUrl(id)} alt={name} style={imgStyle} />
                        <span
                            style={{
                                transition: "transform 0.3s ease",
                                fontWeight: 500,
                            }}
                        >
                            {name}
                        </span>
                    </div>
                ))}
            </Marquee>
        </div>
    );
}