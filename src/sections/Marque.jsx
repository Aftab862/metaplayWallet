import { Typography } from "@mui/material";
import React from "react";
import Marquee from "react-fast-marquee";

const coinsRow1 = [
    { id: "bitcoin", name: "Bitcoin" },
    { id: "ethereum", name: "Ethereum" },
    { id: "binancecoin", name: "BNB" },
    { id: "cardano", name: "Cardano" },
    { id: "solana", name: "Solana" },
    { id: "dogecoin", name: "Dogecoin" },
    { id: "avalanche-2", name: "Avalanche" },
    { id: "tron", name: "TRON" },
    { id: "monero", name: "Monero" },
    { id: "okb", name: "OKB" },
    { id: "cosmos", name: "Cosmos" },
    { id: "internet-computer", name: "ICP" },
    { id: "ethereum-classic", name: "Ethereum Classic" },
    { id: "aptos", name: "Aptos" },
    { id: "lido-dao", name: "Lido DAO" },
    { id: "hedera-hashgraph", name: "Hedera" },
    { id: "arbitrum", name: "Arbitrum" },
    { id: "vechain", name: "VeChain" },
    { id: "the-graph", name: "The Graph" },
    { id: "aave", name: "Aave" },
    { id: "flow", name: "Flow" },
    { id: "frax", name: "Frax" },
    { id: "quant-network", name: "Quant" },
];

const coinsRow2 = [
    { id: "polkadot", name: "Polkadot" },
    { id: "litecoin", name: "Litecoin" },
    { id: "chainlink", name: "Chainlink" },
    { id: "stellar", name: "Stellar" },
    { id: "matic-network", name: "Polygon" },
    { id: "dai", name: "DAI" },
    { id: "maker", name: "Maker" },
    { id: "filecoin", name: "Filecoin" },
    { id: "algorand", name: "Algorand" },
    { id: "uniswap", name: "Uniswap" },
    { id: "near", name: "NEAR" },
    { id: "elrond-erd-2", name: "MultiversX" },
    { id: "iota", name: "IOTA" },
    { id: "fantom", name: "Fantom" },
    { id: "neo", name: "NEO" },
    { id: "tezos", name: "Tezos" },
    { id: "decentraland", name: "Decentraland" },
    { id: "eos", name: "EOS" },
    { id: "theta-token", name: "Theta" },
    { id: "pancakeswap-token", name: "PancakeSwap" },
    { id: "zcash", name: "Zcash" },
    { id: "curve-dao-token", name: "Curve DAO" },
    { id: "kava", name: "Kava" },
    { id: "optimism", name: "Optimism" },
];


function coinImgUrl(id) {
    return `https://cdn.jsdelivr.net/gh/simplr-sh/coin-logos/images/${id}/small.png`;
}

export default function CryptoMarquee() {
    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
        textAlign: "center",
        fontSize: "14px",
        minWidth: "100px",
        margin: "20px",
    };

    const imgStyle = {
        width: 70,
        height: 70,
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
            <Typography variant="h4" fontWeight="600">
                Trending Coins
            </Typography>

            <Marquee pauseOnHover speed={40} gradient style={{ width: "85%" }}>
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
                gradient
                style={{ width: "85%" }}
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