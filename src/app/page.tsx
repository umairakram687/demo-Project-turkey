"use client";
import {
  Badge,
  Box,
  Button,
  Card,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
  Typography,
} from "@mui/material";
import type React from "react";

import { useCallback } from "react";

import { useRef } from "react";

import { useState } from "react";

import Image from "next/image";
import arrowRight from "@/assets/arrow-right-icon.png";
import infoIcon from "@/assets/info-icon.png";
import caretLeft from "@/assets/caret-left.png";
import caretRight from "@/assets/caret-right.png";
import starOutlined from "@/assets/star-outlined.png";
import starFilled from "@/assets/star-filled.png";
import casinoImage from "@/assets/casino-image.png";
import sportImage from "@/assets/sport-image.png";
import game1 from "@/assets/game1.png";
import game2 from "@/assets/game2.png";
import game3 from "@/assets/game3.png";
import game4 from "@/assets/game4.png";
import game5 from "@/assets/game5.png";
import game6 from "@/assets/game6.png";
import game7 from "@/assets/game7.png";
import promotionImage from "@/assets/promotion-image.png";
import promotionImage1 from "@/assets/promotion-2.png";
import promotionImage2 from "@/assets/promotion-3.png";
import searchIcon from "@/assets/search-icon.png";
import { LeaderboardTable } from "@/components/organisms/betting-leaderboard";
import { FAQSection } from "@/components/organisms/faq";
import Footer from "@/components/organisms/footer";

const games = [
  {
    id: 1,
    title: "Gates of Olympus 1000",
    provider: "Pragmatic Play",
    img: game1,
  },
  {
    id: 2,
    title: "Sweet Bonanza 1000",
    provider: "Pragmatic Play",
    img: game2,
  },
  { id: 3, title: "Sugar Rush 1000", provider: "Pragmatic Play", img: game3 },
  {
    id: 4,
    title: "Wanted Dead or a Wild",
    provider: "Hacksaw Gaming",
    img: game4,
  },
  {
    id: 5,
    title: "Sweet Bonanza Super Scatter",
    provider: "Pragmatic Play",
    img: game5,
  },
  {
    id: 6,
    title: "Big Bass Reel Repeat",
    provider: "Pragmatic Play",
    img: game6,
  },
  { id: 7, title: "Le King", provider: "Pragmatic Play", img: game7 },
  { id: 8, title: "Sugar Rush 1000", provider: "Pragmatic Play", img: game3 },
  {
    id: 9,
    title: "Sweet Bonanza 1000",
    provider: "Pragmatic Play",
    img: game2,
  },
];

export default function Home() {
  const [category, setCategory] = useState("Casino");
  const [search, setSearch] = useState("");

  const trendingGamesRef = useRef<HTMLDivElement>(null);
  const trendingSportsRef = useRef<HTMLDivElement>(null);

  const scrollContainer = useCallback(
    (ref: React.RefObject<HTMLDivElement>, direction: "left" | "right") => {
      if (ref.current) {
        const scrollAmount = 300; // Adjust scroll distance as needed
        const currentScroll = ref.current.scrollLeft;
        const targetScroll =
          direction === "left"
            ? currentScroll - scrollAmount
            : currentScroll + scrollAmount;

        ref.current.scrollTo({
          left: targetScroll,
          behavior: "smooth",
        });
      }
    },
    []
  );

  return (
    <div className="px-4 md:px-6 lg:px-8">
      <Box
        sx={{
          display: "flex",
          my: "36px",
          width: "100%",
          justifyContent: "space-between",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 3, md: 0 },
        }}
      >
        <Box sx={{ width: { xs: "100%", md: "32%" } }}>
          <Typography variant="h6" sx={{ fontWeight: 600, fontSize: "24px" }}>
            Test User
          </Typography>
          <div className="mt-8 space-y-6">
            <div className="flex justify-between items-center">
              <Typography variant="body1" sx={{ width: "35%" }}>
                Your VIP Progress
              </Typography>
              <Image
                src={arrowRight || "/placeholder.svg"}
                width={24}
                height={24}
                alt=""
              />
              <div className="flex gap-2 items-center">
                <Typography variant="body1">50.00%</Typography>
                <Image src={infoIcon || "/placeholder.svg"} alt="" width={24} />
              </div>
            </div>
            <div className="bg-[#1D1C20] rounded-lg overflow-hidden">
              <div
                className="w-[50%] h-[12px]"
                style={{
                  background:
                    "linear-gradient(252.86deg, #FFE88E 14.97%, #FEFE62 88.21%), #D9D9D9",
                }}
              ></div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center w-[33%]">
                <Image src={starOutlined || "/placeholder.svg"} alt="" />
                <Typography variant="body1">None</Typography>
              </div>{" "}
              <Image
                src={arrowRight || "/placeholder.svg"}
                width={24}
                height={24}
                alt=""
              />
              <div className="flex gap-2 items-center">
                <Typography variant="body1">Bronze</Typography>
                <Image
                  src={starFilled || "/placeholder.svg"}
                  alt=""
                  width={24}
                />
              </div>
            </div>
          </div>
        </Box>
        <Box sx={{ width: { xs: "100%", md: "32%" } }}>
          <Card
            sx={{ borderRadius: "10px", overflow: "hidden", height: "240px" }}
          >
            <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
              <Image
                src={casinoImage || "/placeholder.svg"}
                alt="Casino"
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Card>
          <div className="mt-2 flex justify-between items-center">
            <Typography
              variant="body1"
              sx={{ fontWeight: "600", fontSize: "14px" }}
            >
              Casino
            </Typography>
            <div className="flex gap-1 items-center">
              <div className="size-1.5 bg-[#20AD65] rounded-full"></div>
              <Typography
                variant="body1"
                sx={{ fontWeight: "600", fontSize: "12px" }}
              >
                348&nbsp;
                <span className="font-normal text-xs text-[#FFFFFF8C]">
                  playing
                </span>
              </Typography>
            </div>
          </div>
        </Box>
        <Box sx={{ width: { xs: "100%", md: "32%" } }}>
          <Card
            sx={{ borderRadius: "10px", overflow: "hidden", height: "240px" }}
          >
            <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
              <Image
                src={sportImage || "/placeholder.svg"}
                alt="Sport"
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Card>
          <div className="mt-2 flex justify-between items-center">
            <Typography
              variant="body1"
              sx={{ fontWeight: "600", fontSize: "14px" }}
            >
              Sport
            </Typography>
            <div className="flex gap-1 items-center">
              <div className="size-1.5 bg-[#20AD65] rounded-full"></div>
              <Typography
                variant="body1"
                sx={{ fontWeight: "600", fontSize: "12px" }}
              >
                348&nbsp;
                <span className="font-normal text-xs text-[#FFFFFF8C]">
                  playing
                </span>
              </Typography>
            </div>
          </div>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          mb: 4,
          mt: 6,
          width: "100%",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          sx={{ width: { xs: "100%", sm: 140 } }}
          size="small"
        >
          <MenuItem value="Casino">Casino</MenuItem>
          <MenuItem value="Sports">Sports</MenuItem>
        </Select>

        <OutlinedInput
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search your game"
          fullWidth
          size="small"
          startAdornment={
            <InputAdornment position="start">
              <Image src={searchIcon || "/placeholder.svg"} alt="" />
            </InputAdornment>
          }
        />
      </Box>
      <Box sx={{ mt: 3, width: "100%" }}>
        <Box
          sx={{ display: "flex", justifyContent: "space-between", mb: "5px" }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              fontSize: "16px",
              mb: "10px",
              color: "#FFFFFF8C",
            }}
          >
            Trending Games
          </Typography>
          <div className="flex gap-2">
            <Button
              variant="outlined"
              sx={{ py: 0.5, px: 0 }}
              //eslint-disable-next-line
              onClick={() => scrollContainer(trendingGamesRef as any, "left")}
            >
              <Image
                src={caretLeft || "/placeholder.svg"}
                alt=""
                width={10}
                height={10}
              />
            </Button>
            <Button
              variant="outlined"
              sx={{ py: 0.5 }}
              //eslint-disable-next-line
              onClick={() => scrollContainer(trendingGamesRef as any, "right")}
            >
              <Image
                src={caretRight || "/placeholder.svg"}
                alt=""
                width={10}
                height={10}
              />
            </Button>
          </div>
        </Box>
        <Box
          ref={trendingGamesRef}
          sx={{
            display: "flex",
            gap: 2,
            overflowX: "hidden",
            pb: 1,
            "&::-webkit-scrollbar": { display: "none" },
            overscrollBehavior: "none",
          }}
        >
          {games.map((game, index) => (
            <Box
              key={game.id}
              sx={{
                minWidth: 140,
                flexShrink: 0,
                position: "relative",
              }}
            >
              <Card
                sx={{
                  borderRadius: "10px",
                  overflow: "hidden",
                  height: 180,
                  position: "relative",
                }}
              >
                <Image
                  src={game.img || "/placeholder.svg"}
                  alt={game.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Card>

              <Box
                sx={{
                  position: "absolute",
                  top: 8,
                  left: 8,
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  bgcolor: "#000",
                  color: "#fff",
                  fontSize: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 600,
                }}
              >
                {index + 1}
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mt: 0.5 }}>
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    bgcolor: "#20AD65",
                    borderRadius: "50%",
                    mr: 0.5,
                  }}
                />
                <Typography variant="caption" sx={{ fontWeight: 600 }}>
                  348&nbsp;
                  <span style={{ fontWeight: 400, color: "#FFFFFF8C" }}>
                    playing
                  </span>
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Box sx={{ mt: 4, width: "100%" }}>
        <Box
          sx={{ display: "flex", justifyContent: "space-between", mb: "5px" }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              fontSize: "16px",
              mb: "10px",
              color: "#FFFFFF8C",
            }}
          >
            Trending Sports
          </Typography>
          <div className="flex gap-2">
            <Button
              variant="outlined"
              sx={{ py: 0.5, px: 0 }}
              //eslint-disable-next-line
              onClick={() => scrollContainer(trendingSportsRef as any, "left")}
            >
              <Image
                src={caretLeft || "/placeholder.svg"}
                alt=""
                width={10}
                height={10}
              />
            </Button>
            <Button
              variant="outlined"
              sx={{ py: 0.5 }}
              //eslint-disable-next-line
              onClick={() => scrollContainer(trendingSportsRef as any, "right")}
            >
              <Image
                src={caretRight || "/placeholder.svg"}
                alt=""
                width={10}
                height={10}
              />
            </Button>
          </div>
        </Box>
        <Box
          ref={trendingSportsRef}
          sx={{
            display: "flex",
            gap: 2,
            overflowX: "hidden",
            pb: 1,
            "&::-webkit-scrollbar": { display: "none" },
            overscrollBehavior: "none",
          }}
        >
          {games.map((game, index) => (
            <Box
              key={game.id}
              sx={{
                minWidth: 140,
                flexShrink: 0,
                position: "relative",
              }}
            >
              <Card
                sx={{
                  borderRadius: "10px",
                  overflow: "hidden",
                  height: 180,
                  position: "relative",
                }}
              >
                <Image
                  src={game.img || "/placeholder.svg"}
                  alt={game.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Card>

              <Box
                sx={{
                  position: "absolute",
                  top: 8,
                  left: 8,
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  bgcolor: "#000",
                  color: "#fff",
                  fontSize: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 600,
                }}
              >
                {index + 1}
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mt: 0.5 }}>
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    bgcolor: "#20AD65",
                    borderRadius: "50%",
                    mr: 0.5,
                  }}
                />
                <Typography variant="caption" sx={{ fontWeight: 600 }}>
                  348&nbsp;
                  <span style={{ fontWeight: 400, color: "#FFFFFF8C" }}>
                    playing
                  </span>
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
      <Box sx={{ mt: 4 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            fontSize: "16px",
            mb: "10px",
            color: "#FFFFFF8C",
          }}
        >
          Promotions
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            overflowX: "auto",
            pb: 1,
            flexDirection: { xs: "column", md: "row" },
          }}
        >
          <Card
            sx={{
              width: { xs: "100%", md: "32%" },
              display: "flex",
              justifyContent: "space-between",
              padding: "24px",
            }}
          >
            <div className="">
              <Badge
                sx={{
                  background: "#FFFFFF26",
                  padding: "4px 8px",
                  borderRadius: "100px",
                  fontSize: "12px",
                  fontWeight: "500",
                }}
              >
                Promotion
              </Badge>
              <div className="mt-3 space-y-1 mb-9">
                <Typography variant="h6">Team Vitality</Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#FFFFFF8C", fontSize: "14px", mt: "4px" }}
                >
                  Kill Target Prize Pool
                </Typography>
              </div>
              <Button variant="text">Read More</Button>
            </div>
            <div className="">
              <Image src={promotionImage || "/placeholder.svg"} alt="" />
            </div>
          </Card>
          <Card
            sx={{
              width: { xs: "100%", md: "32%" },
              display: "flex",
              justifyContent: "space-between",
              padding: "24px",
            }}
          >
            <div className="">
              <Badge
                sx={{
                  background: "#FFFFFF26",
                  padding: "4px 8px",
                  borderRadius: "100px",
                  fontSize: "12px",
                  fontWeight: "500",
                }}
              >
                Promotion
              </Badge>
              <div className="mt-3 space-y-1 mb-9">
                <Typography variant="h6">Angel vs Sinner</Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#FFFFFF8C", fontSize: "14px", mt: "4px" }}
                >
                  New Enhanced RTP game!{" "}
                </Typography>
              </div>
              <Button variant="text">Read More</Button>
            </div>
            <div className="">
              <Image src={promotionImage1 || "/placeholder.svg"} alt="" />
            </div>
          </Card>
          <Card
            sx={{
              width: { xs: "100%", md: "32%" },
              display: "flex",
              justifyContent: "space-between",
              padding: "24px",
            }}
          >
            <div className="">
              <Badge
                sx={{
                  background: "#FFFFFF26",
                  padding: "4px 8px",
                  borderRadius: "100px",
                  fontSize: "12px",
                  fontWeight: "500",
                }}
              >
                Promotion
              </Badge>
              <div className="mt-3 space-y-1 mb-9">
                <Typography variant="h6">Frankie&apos;s Ebor Raffle</Typography>
                <Typography
                  variant="body1"
                  sx={{ color: "#FFFFFF8C", fontSize: "14px", mt: "4px" }}
                >
                  Share in $40,000
                </Typography>
              </div>
              <Button variant="text">Read More</Button>
            </div>
            <div className="">
              <Image src={promotionImage || "/placeholder.svg"} alt="" />
            </div>
          </Card>
        </Box>
      </Box>
      <LeaderboardTable />
      <Box sx={{ mt: 4 }}>
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            fontSize: "16px",
            mb: "10px",
            color: "#FFFFFF8C",
          }}
        >
          Still Have Questions?
        </Typography>

        <FAQSection />
      </Box>
      <Footer />
    </div>
  );
}
