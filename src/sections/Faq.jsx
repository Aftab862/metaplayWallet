import React, { useState } from "react";
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Container,
    Box,
} from "@mui/material";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "What is staking?",
        answer: "Staking involves locking up your crypto to participate in maintaining and securing a blockchain network. By doing so, you help keep the network decentralized and robust against attacks. In return, you earn rewards such as additional coins. It's more than just a way to grow your portfolio—you're actively contributing to the network's health.",
    },
    {
        question: "What’s the difference between staking, lending, and yield farming?",
        answer: "Staking involves locking up your cryptocurrency on-chain to help secure and operate a blockchain network, earning you rewards for your participation. Lending is the act of loaning your cryptocurrency, either on-chain or off-chain, to earn interest. Yield farming is a more complex, on-chain activity where you provide liquidity in decentralized finance protocols to potentially earn yield. With Trust Wallet you can stake without leaving the wallet. You can also also connect any Web3 dApp that offers earning opportunities such as lending, borrowing, and yield farming protocols.",
    },
    {
        question: "What are the risks involved?",
        answer: "While using Trust Wallet, you're interacting directly with decentralized protocols, whether you decide to use in-wallet earn options or earn opportunities via Web3 dApps. Risks may include smart contract vulnerabilities, market volatility or other factors. Trust Wallet is an interface to these services and doesn't control the underlying protocols. It's important to conduct your own research before staking with any protocol.",
    },
];

const FAQSection = () => {
    const [expanded, setExpanded] = useState(null); // Track the currently expanded panel

    const handleChange = (panelIndex) => (event, isExpanded) => {
        setExpanded(isExpanded ? panelIndex : null);
    };

    return (
        <Container maxWidth="md" >
            <Typography
                variant="h5"
                align="center"
                gutterBottom
                sx={{ fontWeight: "bold", mb: 4 }}
            >
                Frequently Asked Questions
            </Typography>

            <Box>
                {faqs.map((faq, index) => (
                    <Accordion
                        key={index}
                        expanded={expanded === index}
                        onChange={handleChange(index)}
                        sx={{
                            mb: 2,
                            backgroundColor: "#f5f5f5",
                            transition: "0.3s",
                            "&:hover": {
                                boxShadow: 6,
                            },
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ChevronDown />}
                            sx={{
                                fontWeight: "bold",
                                fontSize: "1.1rem",
                                px: 2,
                                py: 1,
                            }}
                        >
                            {faq.question}
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography color="text.secondary">
                                {faq.answer}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>
        </Container>
    );
};

export default FAQSection;
