import { Box } from "@mui/material";
import StarPurple500Icon from "@mui/icons-material/StarPurple500";
import Button from "@mui/material/Button";
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
import "./main.css";
const App = () => {
  return (
    <Box>
      <section className="Home">
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

          <Button variant="outlined" color="error">
            Shop Now
            <AddShoppingCart sx={{ fontSize: 30, color: "#8b0000" }} />
          </Button>
        </div>
        <div>
          <img src="https://png.pngtree.com/element_pic/00/16/08/1457b018a9ba86f.jpg"></img>
        </div>
      </section>
      <div className="Items"></div>
      <footer className="footer"></footer>
    </Box>
  );
};

export default App;
