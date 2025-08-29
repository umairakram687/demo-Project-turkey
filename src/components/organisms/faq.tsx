import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import expandIcon from "@/assets/expand-icon.png";
import Image from "next/image";

export const FAQSection = () => {
  const faqData = [
    {
      id: "brand-name",
      question: "Who is Brand Name",
      answer: `Leading the online gambling industry since 2017, Stake.com offers a wide variety of online casino and sports betting options, operating globally in 15 different languages. With a proprietary and secure platform, Stake Casino is home to worldwide local currencies and crypto betting options for online slot games, Stake Originals, and live casino games. Stake Sportsbook offers unbeatable odds on all major sporting events including a range of eSport leagues. We host regular bet bonuses and promotions and offer an exclusive VIP club experience – all with a single, to-use deposit process on our licensed platform.`,
    },
    {
      id: "licensed",
      question: "Is Brand Name Licensed?",
      answer:
        "Yes, Brand Name operates under proper licensing and regulatory oversight to ensure fair and secure gaming.",
    },
    {
      id: "safe-betting",
      question: "Is Betting on Brand Name Safe?",
      answer:
        "Brand Name employs industry-standard security measures including SSL encryption and responsible gambling tools.",
    },
    {
      id: "currencies",
      question: "What Currencies Can I Bet With?",
      answer:
        "We support multiple currencies including USD, EUR, cryptocurrencies like Bitcoin, Ethereum, and many others.",
    },
    {
      id: "casino-games",
      question: "What Types of Casino Games Can I Play?",
      answer:
        "Our casino offers slots, table games, live dealer games, poker, and exclusive Brand Name Originals.",
    },
    {
      id: "sports-betting",
      question: "What Sports Can I Bet On?",
      answer:
        "We cover all major sports including football, basketball, tennis, soccer, eSports, and many more.",
    },
    {
      id: "live-streams",
      question: "How Do I Watch Live Streams?",
      answer:
        "Live streams are available for premium members and can be accessed directly from the sports betting interface.",
    },
  ];

  return (
    <Box sx={{ borderRadius: 2, overflow: "hidden" }}>
      {faqData.map((faq, index) => (
        <Accordion
          key={faq.id}
          defaultExpanded={index === 0}
          sx={{
            color: "white",
            marginBottom: "10px",
            borderRadius: "10px",
            overflow: "hidden",
            "&:before": {
              display: "none",
            },
            "&.Mui-expanded": {
              marginBottom: "10px",
            },
          }}
        >
          <AccordionSummary
            expandIcon={<Image src={expandIcon} alt="" />}
            sx={{
              background: "#1D1C20",
              minHeight: 64,
              "&.Mui-expanded": {
                minHeight: 64,
              },
              "& .MuiAccordionSummary-content": {
                margin: "16px 0",
                "&.Mui-expanded": {
                  margin: "16px 0",
                },
              },
              "&:hover": {
                bgcolor: "#2a2a2a",
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                fontSize: "16px",
              }}
            >
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              background: "#1D1C20",
              pt: 0,
              pb: 3,
              px: 2,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "#FFFFFF8C",
                lineHeight: "20px",
                fontSize: "14px",
              }}
            >
              {faq.answer}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};
