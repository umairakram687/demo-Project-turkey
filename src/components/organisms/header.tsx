import { Box, Button } from "@mui/material";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import logo from "@/assets/logo.png";
import menuIcon from "@/assets/menu-icon.png";

export const Header = ({
  setIsExpended,
}: {
  setIsExpended: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Box
      sx={{
        background: "#27262A",
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        py: "22px",
        px: "16px",
      }}
    >
      <div className="flex gap-2 items-center">
        <Image
          src={menuIcon}
          alt=""
          className="lg:hidden md:hidden block size-4"
          onClick={() => setIsExpended(true)}
        />
        <Image src={logo} width={150} height={32} alt="" />
      </div>
      <div className="flex gap-2 items-center">
        <Button variant="outlined">Login</Button>
        <Button variant="contained">Register</Button>
      </div>
    </Box>
  );
};
