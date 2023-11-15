import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import StoreIcon from "@mui/icons-material/Store";
import { Box, Button, Typography } from "@mui/material";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Box>
      {/* Navbar */}
      <Box
        sx={{
          borderBottom: "1px solid grey",
          boxShadow: 3,
          width: "100vw",
          height: 150,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <StoreIcon sx={{ fontSize: 80, color: "#8b0000" }} />
          <Typography sx={{ fontWeight: 10, userSelect: "none" }} variant="h5">
            Shop With<br></br>Us
          </Typography>
        </Box>

        <Link to="/">
          <HomeIcon sx={{ fontSize: 60, color: "#8b0000" }} />
        </Link>

        <Link to="/item-list">
          <FormatListBulletedIcon sx={{ fontSize: 60, color: "#8b0000" }} />
        </Link>

        <Link to="/about">
          <InfoIcon sx={{ fontSize: 50, color: "#8b0000" }} />
        </Link>

        <Link to="/contact">
          <PhoneForwardedIcon sx={{ fontSize: 50, color: "#8b0000" }} />
        </Link>

        <Link to="/add-cart">
          <AddShoppingCartIcon sx={{ fontSize: 50, color: "#8b0000" }} />
        </Link>
        <Link to="/signup">
          <Button
            sx={{ bgcolor: "#8b0000", ":hover": { bgcolor: "pink" } }}
            variant="contained"
          >
            Signup
          </Button>
        </Link>
      </Box>
      {/* Content */}
      <Box sx={{ display: "flex", justifyContent: "center", pt: 5 }}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
