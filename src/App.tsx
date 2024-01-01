import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import StarPurple500Icon from "@mui/icons-material/StarPurple500";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import PairTrainers from "./assets/pair-trainers.jpg";
import WelcomePic from "./assets/welcome_pic.jpg";
import ControlledCarousel from "./components/carousel/Carousel";
import "./main.css";

const App = () => {
  return (
    <Box>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: 20,
        }}
        className="Home"
      >
        {/* shoes */}
        <Box sx={{ margin: 5 }}>
          <Typography
            sx={{ color: "gold", textShadow: "2px 2px gray" }}
            variant="h3"
          >
            Shoes for your next advanture
          </Typography>
          <img
            style={{ width: "400px", height: "400px" }}
            src={PairTrainers || ""}
            alt="sneakers"
          />
        </Box>
        {/* carousel */}
        <ControlledCarousel />
        {/* explore */}
        <Box
          className="Text"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: 5,
          }}
        >
          <Typography variant="h4">
            Discover a world of exciting products, exclusive deals and a
            seamless shopping experience!
            <StarPurple500Icon />
          </Typography>
          <Link to="/item-list">
            <Button
              variant="outlined"
              color="error"
              sx={{ ":active": { bgcolor: "pink", mt: 5 } }}
            >
              start exploring
              <ArrowForwardIcon sx={{ fontSize: 30, color: "#8b0000" }} />
            </Button>
          </Link>
        </Box>
        <div>
          <img
            src={WelcomePic}
            alt="welcome-pic"
            style={{ borderRadius: "100%", width: 500 }}
          ></img>
        </div>
      </section>
      {/* Footer */}
      <footer className="footer">
        {/* for text */}
        <div className="footerText">
          <p>Thanks for checking out our website!</p>
          <p>&copy; Shopify. All rights reserved.</p>
          <p>100+ products can get "&trade;"</p>
        </div>
        {/* for address */}
        <div className="footerAddress">
          <address>
            &#64; No.63, Bahan, Yangon:
            <p> &#128222; 09-253-125-63</p>
            <p>
              email: <a href="#">contact&#64;shopify.shop</a>
            </p>
          </address>
        </div>
      </footer>
    </Box>
  );
};

export default App;
