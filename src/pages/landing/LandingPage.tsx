import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, Card, Typography } from "@mui/material";
import { useState } from "react";
import Signup from "../../components/form/SignUp";
import HoodiePic from "./../../assets/hoodie-pic.jpg";
import PairTrainers from "./../../assets/pair-trainers.jpg";

import ControlledCarousel from "../../components/carousel/Carousel";

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
          boxShadow: 4,
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
      <Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            p: 10,
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              color: "#0273C1",
              textShadow: "1px 1px 5px grey",
              letterSpacing: 2,
              fontSize: 70,
            }}
          >
            Shoes for your<br></br>next adventure
          </Typography>
          <img style={{ width: 600 }} src={PairTrainers} alt="pair-trainers" />
        </Box>
        <Box
          sx={{
            p: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              color: "gold",
              textAlign: "end",
              textShadow: "1px 1px 5px grey",
              letterSpacing: 2,
              fontSize: 70,
            }}
          >
            Embrace the winter,<br></br>chill with our cozy hoodies
          </Typography>
          <img
            style={{
              margin: 10,
              width: 800,
              borderRadius: "50%",
              mixBlendMode: "soft-light",
            }}
            src={HoodiePic}
            alt="hoodie-pic"
          />
        </Box>
        <Box
          sx={{
            m: 10,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              width: 630,
              height: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: 3,
            }}
          >
            <ControlledCarousel />
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default LandingPage;
