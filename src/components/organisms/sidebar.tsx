"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Box,
  Typography,
  useMediaQuery,
} from "@mui/material";
import affiliateIcon from "@/assets/affiliate-icon.png";
import blogIcon from "@/assets/blog-icon.png";
import forumIcon from "@/assets/forum-icon.png";
import gambelIcon from "@/assets/gambel-icon.png";
import languageIcon from "@/assets/language-icon.png";
import sponsershipIcon from "@/assets/sponsership-icon.png";
import promotionIcon from "@/assets/promotion-icon.png";
import supportIcon from "@/assets/support-icon.png";
import vipClubIcon from "@/assets/vip-club-icon.png";
import expandIcon from "@/assets/expand-icon.png";
import Image from "next/image";
import menuIcon from "@/assets/menu-icon.png";

export const Sidebar = ({
  isExpanded,
  setIsExpended,
}: {
  isExpanded: boolean;
  setIsExpended: Dispatch<SetStateAction<boolean>>;
}) => {
  const [openPromotions, setOpenPromotions] = useState(false);
  const [openLanguage, setOpenLanguage] = useState(false);
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <Drawer
      variant={isMobile ? "temporary" : "permanent"}
      open={isMobile && isExpanded}
      sx={{
        width: 280,
        flexShrink: 0,
      }}
    >
      <Box display="flex" alignItems="center" gap={1} p={2}>
        <Image
          src={menuIcon}
          alt=""
          className="lg:hidden md:hidden block size-4"
          onClick={() => setIsExpended(false)}
          height={24}
        />
        <Box
          sx={{
            bgcolor: "#333",
            px: 2,
            py: 1,
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          <Typography variant="body2">Casino</Typography>
        </Box>
        <Box
          sx={{
            bgcolor: "#333",
            px: 2,
            py: 1,
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          <Typography variant="body2">Sports</Typography>
        </Box>
      </Box>

      <List sx={{ background: "#0F0F10", mx: 2, my: 1, borderRadius: "10px" }}>
        {/* Promotions Dropdown */}
        <ListItemButton onClick={() => setOpenPromotions(!openPromotions)}>
          <ListItemIcon>
            <Image src={promotionIcon} width={24} height={24} alt="" />
          </ListItemIcon>
          <ListItemText primary="Promotions" />
          {openPromotions ? (
            <Image
              src={expandIcon}
              width={24}
              height={24}
              alt=""
              className="rotate-180"
            />
          ) : (
            <Image src={expandIcon} width={24} height={24} alt="" />
          )}
        </ListItemButton>
        <Collapse in={openPromotions} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Bonus Offers" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Free Spins" />
            </ListItemButton>
          </List>
        </Collapse>

        <ListItemButton>
          <ListItemIcon>
            <Image src={affiliateIcon} width={24} height={24} alt="" />
          </ListItemIcon>
          <ListItemText primary="Affiliate" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <Image src={vipClubIcon} width={24} height={24} alt="" />
          </ListItemIcon>
          <ListItemText primary="VIP Club" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <Image src={blogIcon} width={24} height={24} alt="" />
          </ListItemIcon>
          <ListItemText primary="Blog" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <Image src={forumIcon} width={24} height={24} alt="" />
          </ListItemIcon>
          <ListItemText primary="Forum" />
        </ListItemButton>
      </List>

      <List sx={{ background: "#0F0F10", mx: 2, borderRadius: "10px" }}>
        <ListItemButton>
          <ListItemIcon>
            <Image src={sponsershipIcon} width={24} height={24} alt="" />
          </ListItemIcon>
          <ListItemText primary="Sponsorships" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <Image src={gambelIcon} width={24} height={24} alt="" />
          </ListItemIcon>
          <ListItemText primary="Responsible Gambling" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
            <Image src={supportIcon} width={24} height={24} alt="" />
          </ListItemIcon>
          <ListItemText primary="Live Support" />
        </ListItemButton>

        <ListItemButton onClick={() => setOpenLanguage(!openLanguage)}>
          <ListItemIcon>
            <Image src={languageIcon} width={24} height={24} alt="" />
          </ListItemIcon>
          <ListItemText
            primary="Language"
            sx={{
              color: "#FFFFFF8C",
              fontSize: "12px",
            }}
          />
          {openLanguage ? (
            <Image
              src={expandIcon}
              width={24}
              height={24}
              alt=""
              className="rotate-180"
            />
          ) : (
            <Image src={expandIcon} width={24} height={24} alt="" />
          )}
        </ListItemButton>
        <Collapse in={openLanguage} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="English" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Spanish" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="French" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </Drawer>
  );
};
