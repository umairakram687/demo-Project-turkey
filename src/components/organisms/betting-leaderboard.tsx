"use client";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import type React from "react";
import { useState } from "react";

interface BetData {
  id: number;
  game: string;
  user: string;
  time: string;
  betAmount: string;
  multiplier: string;
  payout: string;
  payoutColor: "success" | "error";
  gameIcon: string;
}

const betData: BetData[] = [
  {
    id: 1,
    game: "Keno",
    user: "Hidden",
    time: "10:31 PM",
    betAmount: "$1,995.30",
    multiplier: "10:31 PM",
    payout: "-$1,995.30",
    payoutColor: "error",
    gameIcon: "🎲",
  },
  {
    id: 2,
    game: "Stake Roulette",
    user: "Hidden",
    time: "10:31 PM",
    betAmount: "$4,800.00",
    multiplier: "10:31 PM",
    payout: "$28,800.00",
    payoutColor: "success",
    gameIcon: "🎰",
  },
  {
    id: 3,
    game: "Big Bass Halloween",
    user: "Hidden",
    time: "10:31 PM",
    betAmount: "$1,172.19",
    multiplier: "10:31 PM",
    payout: "-$586.10",
    payoutColor: "error",
    gameIcon: "🎣",
  },
  {
    id: 4,
    game: "Keno",
    user: "Hidden",
    time: "10:31 PM",
    betAmount: "$1,995.30",
    multiplier: "10:31 PM",
    payout: "-$1,995.30",
    payoutColor: "error",
    gameIcon: "🎲",
  },
  {
    id: 5,
    game: "Stake Roulette",
    user: "Hidden",
    time: "10:31 PM",
    betAmount: "$4,800.00",
    multiplier: "10:31 PM",
    payout: "$28,800.00",
    payoutColor: "success",
    gameIcon: "🎰",
  },
  {
    id: 6,
    game: "Big Bass Halloween",
    user: "Hidden",
    time: "10:31 PM",
    betAmount: "$1,172.19",
    multiplier: "10:31 PM",
    payout: "-$586.10",
    payoutColor: "error",
    gameIcon: "🎣",
  },
  {
    id: 7,
    game: "Keno",
    user: "Hidden",
    time: "10:31 PM",
    betAmount: "$1,995.30",
    multiplier: "10:31 PM",
    payout: "-$1,995.30",
    payoutColor: "error",
    gameIcon: "🎲",
  },
  {
    id: 8,
    game: "Stake Roulette",
    user: "Hidden",
    time: "10:31 PM",
    betAmount: "$4,800.00",
    multiplier: "10:31 PM",
    payout: "$28,800.00",
    payoutColor: "success",
    gameIcon: "🎰",
  },
  {
    id: 9,
    game: "Big Bass Halloween",
    user: "Hidden",
    time: "10:31 PM",
    betAmount: "$1,172.19",
    multiplier: "10:31 PM",
    payout: "-$586.10",
    payoutColor: "error",
    gameIcon: "🎣",
  },
];

export function LeaderboardTable() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Box sx={{ width: "100%", minHeight: "500px", mt: 4 }}>
      <Box
        sx={{
          bgcolor: "#171619",
          p: "8px",
          borderRadius: "10px",
        }}
      >
        <div className="flex gap-3 items-center">
          <div
            className={`py-2.5 px-3.5 cursor-pointer font-normal text-sm ${
              activeTab === 0 ? "bg-[#FFFFFF26] rounded-lg" : ""
            }`}
            onClick={() => setActiveTab(0)}
          >
            Casino Bets
          </div>
          <div
            className={`py-2.5 px-3.5 cursor-pointer font-normal text-sm ${
              activeTab === 1 ? "bg-[#FFFFFF26] rounded-lg" : ""
            }`}
            onClick={() => setActiveTab(1)}
          >
            Sports Bets
          </div>
          <div
            className={`py-2.5 px-3.5 cursor-pointer font-normal text-sm ${
              activeTab === 2 ? "bg-[#FFFFFF26] rounded-lg" : ""
            }`}
            onClick={() => setActiveTab(2)}
          >
            Race Leaderboard
          </div>
        </div>
      </Box>

      <TableContainer
        component={Paper}
        sx={{ bgcolor: "transparent", boxShadow: "none" }}
      >
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  color: "#888",
                  fontSize: "14px",
                  fontWeight: 500,
                  border: "none",
                  py: 2,
                }}
              >
                Game
              </TableCell>
              <TableCell
                sx={{
                  color: "#888",
                  fontSize: "14px",
                  fontWeight: 500,
                  border: "none",
                  py: 2,
                }}
              >
                User
              </TableCell>
              <TableCell
                sx={{
                  color: "#888",
                  fontSize: "14px",
                  fontWeight: 500,
                  border: "none",
                  py: 2,
                }}
              >
                Time
              </TableCell>
              <TableCell
                sx={{
                  color: "#888",
                  fontSize: "14px",
                  fontWeight: 500,
                  border: "none",
                  py: 2,
                }}
              >
                Bet Amount
              </TableCell>
              <TableCell
                sx={{
                  color: "#888",
                  fontSize: "14px",
                  fontWeight: 500,
                  border: "none",
                  py: 2,
                }}
              >
                Multiplier
              </TableCell>
              <TableCell
                sx={{
                  color: "#888",
                  fontSize: "14px",
                  fontWeight: 500,
                  border: "none",
                  py: 2,
                }}
              >
                Payout
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {betData.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  "&:hover": { bgcolor: "#2a2a2a" },
                  "&:nth-of-type(odd)": { bgcolor: "#1D1C20" },
                }}
              >
                <TableCell sx={{ border: "none", py: 2 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box sx={{ fontSize: "16px" }}>{row.gameIcon}</Box>
                    <Typography
                      sx={{ color: "#fff", fontSize: "14px", fontWeight: 500 }}
                    >
                      {row.game}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ border: "none", py: 2 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Box sx={{ fontSize: "16px" }}>👤</Box>
                    <Typography sx={{ color: "#fff", fontSize: "14px" }}>
                      {row.user}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell sx={{ border: "none", py: 2 }}>
                  <Typography sx={{ color: "#fff", fontSize: "14px" }}>
                    {row.time}
                  </Typography>
                </TableCell>
                <TableCell sx={{ border: "none", py: 2 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography
                      sx={{ color: "#fff", fontSize: "14px", fontWeight: 500 }}
                    >
                      {row.betAmount}
                    </Typography>
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        bgcolor: row.betAmount.includes("4,800")
                          ? "#ffa500"
                          : row.betAmount.includes("1,172")
                          ? "#20AD65"
                          : "#ffa500",
                      }}
                    />
                  </Box>
                </TableCell>
                <TableCell sx={{ border: "none", py: 2 }}>
                  <Typography sx={{ color: "#fff", fontSize: "14px" }}>
                    {row.multiplier}
                  </Typography>
                </TableCell>
                <TableCell sx={{ border: "none", py: 2 }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <Typography
                      sx={{
                        color:
                          row.payoutColor === "success" ? "#20AD65" : "#ff4444",
                        fontSize: "14px",
                        fontWeight: 500,
                      }}
                    >
                      {row.payout}
                    </Typography>
                    <Box
                      sx={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        bgcolor:
                          row.payoutColor === "success" ? "#20AD65" : "#ff4444",
                      }}
                    />
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
