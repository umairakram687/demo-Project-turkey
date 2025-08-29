import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import Facebook from "@/assets/socials/facebook.svg";
import Twitter from "@/assets/socials/twitter.svg";
import Messanger from "@/assets/socials/messanger.svg";
import Instagram from "@/assets/socials/instagram.svg";
import YouTube from "@/assets/socials/youtube.svg";
import LinkedIn from "@/assets/socials/linkedin.svg";
import Image from "next/image";

const Footer = () => {
  const footerSections = [
    {
      title: "Casino",
      links: [
        "Casino Games",
        "Slots",
        "Live Casino",
        "Roulette",
        "Blackjack",
        "Poker",
        "Publishers",
        "Promos & Competitions",
        "Brand Name Engine",
      ],
    },
    {
      title: "Casino",
      links: [
        "Sportsbook",
        "Live Sports",
        "Soccer",
        "Basketball",
        "Tennis",
        "eSports",
        "Bet Bonuses",
        "Sports Rules",
        "Racing Rules",
      ],
    },
    {
      title: "Support",
      links: [
        "Help Center",
        "Fairness",
        "Gambling Helpline",
        "Live Support Exclusion",
        "Law Enforcement Request",
      ],
    },
    {
      title: "About Us",
      links: [
        "VIP Club",
        "Affiliate",
        "Privacy Policy",
        "AML Policy",
        "Terms of Service",
      ],
    },
    {
      title: "Payment Info",
      links: [
        "Deposit & Withdrawals",
        "Currency Guide",
        "Crypto Guide",
        "Supported Crypto",
        "How to Use the Vault",
        "How Much to Bet With",
      ],
    },
    {
      title: "FAQ",
      links: [
        "How-to Guides",
        "Online Casino Guide",
        "Sports Betting Guide",
        "How to Live Stream Sports",
        "Brand Name VIP Guide",
        "House Edge Guide",
      ],
    },
  ];

  const socialIcons = [
    { icon: Facebook, label: "Facebook" },
    { icon: Twitter, label: "Twitter" },
    { icon: Messanger, label: "Messanger" },
    { icon: Instagram, label: "Instagram" },
    { icon: YouTube, label: "YouTube" },
    { icon: LinkedIn, label: "LinkedIn" },
  ];

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#1D1C20",
        color: "#ffffff",
        py: 3,
        mt: 8,
        mb: 4,
        borderRadius: "10px",
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={7}>
          {footerSections.map((section, index) => (
            <Grid
              size={{
                xs: 12,
                sm: 6,
                md: 2,
              }}
              key={index}
              component="div"
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 500,
                  mb: 2,
                  fontSize: "14px",
                  color: "#ffffff",
                }}
              >
                {section.title}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                {section.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href="#"
                    sx={{
                      color: "#FFFFFF8C",
                      textDecoration: "none",
                      fontSize: "14px",
                      "&:hover": {
                        color: "#ffffff",
                        textDecoration: "none",
                      },
                    }}
                  >
                    {link}
                  </Link>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4, borderColor: "#333333" }} />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Box sx={{ display: "flex", gap: 1 }}>
            {socialIcons.map((social, index) => (
              <IconButton
                key={index}
                sx={{
                  color: "#b0b0b0",
                  "&:hover": {
                    color: "#ffffff",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
                aria-label={social.label}
              >
                <Image src={social.icon} alt="" />
              </IconButton>
            ))}
          </Box>

          <Typography
            variant="body2"
            sx={{
              color: "#b0b0b0",
              fontSize: "0.875rem",
            }}
          >
            © 2025 brandname.com | All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
