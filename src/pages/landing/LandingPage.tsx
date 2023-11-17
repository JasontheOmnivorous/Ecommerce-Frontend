import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import Signup from "../../components/form/SignUp";
import PairTrainers from "./../../assets/pair-trainers.jpg";

const LandingPage = () => {
  const [search, setSearch] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Box>
      {/* Navbar */}
      <Box
        sx={{
          width: "100vw",
          height: 150,
          borderBottom: "1px solid grey",
          boxShadow: 3,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button
            sx={{ borderRadius: "50%" }}
            onClick={() => setSearch(!search)}
          >
            <SearchIcon sx={{ color: "black", fontSize: 40 }} />
          </Button>
          {search && (
            <input
              type="text"
              placeholder="Search..."
              style={{
                backgroundColor: "#C7C5CE",
                height: 40,
                borderRadius: 20,
                border: "none",
                outline: "none",
                padding: 10,
                width: 250,
              }}
            />
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ m: 5 }} variant="h5">
            Men
          </Typography>
          <Typography sx={{ m: 5 }} variant="h5">
            Women
          </Typography>
          <Typography sx={{ m: 5 }} variant="h5">
            Kids & Children
          </Typography>
          <Button
            onClick={() => setOpen(true)}
            sx={{ borderRadius: "50%", m: 5 }}
          >
            <PermIdentityIcon
              sx={{
                fontSize: 60,
                color: "black",
                border: "1px solid black",
                borderRadius: "50%",
                p: 1,
              }}
            />
          </Button>
        </Box>
        <Signup open={open} setOpen={setOpen} />
      </Box>
      {/* ads */}
      <Box sx={{ padding: 10 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontWeight: "bold" }} variant="h3">
            Shoes for your<br></br>next adventure
          </Typography>
          <img style={{ width: 600 }} src={PairTrainers} alt="pair-trainers" />
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
