"use client";
import { createTheme } from "@mui/material/styles";
import { Inter } from "next/font/google";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  typography: {
    fontFamily: inter.style.fontFamily,
  },
  palette: {
    primary: {
      main: "#131214",
      contrastText: "#ffffff",
    },
    background: {
      default: "#0d0d0d",
      paper: "#111111",
    },
    text: {
      primary: "#ffffff",
      secondary: "#aaaaaa",
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: 280,
          backgroundColor: "#171619",
          color: "#ffffff",
          borderRight: "1px solid #222",
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        root: {
          fontWeight: 400,
          fontSize: "14px",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: "#1e1e1e",
          },
          "&.Mui-selected": {
            backgroundColor: "#2a2a2a",
            color: "#fff",
          },
          fontFamily: inter.style.fontFamily,
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: "#fff",
          minWidth: 40,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: "#333",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 600,
          fontFamily: inter.style.fontFamily,
          padding: "6px 18px",
        },
        contained: {
          backgroundColor: "#FFFFFF",
          color: "#131214",
          "&:hover": {
            backgroundColor: "#1b8f54",
            color: "#fff",
          },
        },
        outlined: {
          borderColor: "#FFFFFF",
          color: "#FFFFFF",
          backgroundColor: "#131214",

          "&:hover": {
            borderColor: "#1b8f54",
            backgroundColor: "#131214",
          },
        },
        text: {
          color: "#FFFFFF",
          padding: 0,
          "&:hover": {
            borderColor: "#1b8f54",
            backgroundColor: "#131214",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: "#27262A",
          borderRadius: "10px",
          fontSize: "16px",
          "& fieldset": {
            borderColor: "none",
          },
          "&:hover fieldset": {
            borderColor: "none",
          },
          "&.Mui-focused fieldset": {
            borderColor: "none",
          },
          input: {
            color: "#fff",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        outlined: {
          backgroundColor: "#27262A",
          borderRadius: "10px",
          color: "#fff",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "none",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "none",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "none",
          },
        },
        icon: {
          color: "#aaa",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#aaa",
          "&.Mui-focused": {
            color: "#fff",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: "#1D1C20",
          borderRadius: "10px",
        },
      },
    },
  },
});

export default theme;
