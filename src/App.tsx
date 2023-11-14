import { Box } from "@mui/material";
import StarPurple500Icon from "@mui/icons-material/StarPurple500";
import Button from "@mui/material/Button";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
import "./main.css";
const App = () => {
  return (
    <Box>
      <section className="Home">
        {/* body part */}
        <div className="Text">
          <h1>
            Enjoy With Us, Make A Fun, Do Something special ...{" "}
            <StarPurple500Icon />{" "}
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            illo excepturi odio magnam sed tempore. Nam libero et ipsam earum ab
            repellendus qui, reprehenderit tenetur eos exercitationem accusamus
            animi enim!
          </p>

          <Button
            variant="outlined"
            color="error"
            sx={{ ":active": { bgcolor: "pink" } }}
          >
            Shop Now
            <AddShoppingCart sx={{ fontSize: 30, color: "#8b0000" }} />
          </Button>
        </div>
        <div>
          <img
            src="https://www.pngall.com/wp-content/uploads/2016/04/Shopping-High-Quality-PNG.png"
            alt="girlWithcart"
            width={400}
          ></img>
        </div>
      </section>
      {/* Items */}
      <div className="Items"></div>
      {/* Footer */}
      <footer className="footer">
        {/* for text */}
        <div className="footerText">
          <p>Thank for shopping from our website</p>
          <p>
            &copy; CopyRight... Flexiable &hearts; and Believable &diams;
            Website
          </p>
          <p>100+ products can get "&trade;"</p>
        </div>
        {/* for address */}
        <div className="footerAddress">
          <address>
            &#64; No.65, DragonHome Street, NewYork:
            <p> &#128222; 09-253-125-63</p>
            <p>
              email: <a href="#">shopwithus22&#64;gamil.com</a>
            </p>
          </address>
        </div>
      </footer>
    </Box>
  );
};

export default App;
