import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import { Box, Button } from "@mui/material";
import { ReactNode, useState } from "react";
import { Link } from "react-router-dom";
import Signup from "../form/SignUp";
import Logo from "./../../assets/logo.jpg";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

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
          <img src={Logo} alt="logo" style={{ width: 130, height: 130 }} />
        </Box>

        <Link to="/home">
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
        <Button
          onClick={() => setOpen(true)}
          sx={{ bgcolor: "#8b0000", ":hover": { bgcolor: "pink" } }}
          variant="contained"
        >
          Signup
        </Button>
        <Signup open={open} setOpen={setOpen} />
      </Box>
      {/* Content */}
      <Box sx={{ display: "flex", justifyContent: "center", pt: 5 }}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
