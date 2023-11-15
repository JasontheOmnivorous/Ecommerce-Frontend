import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { Box, Button } from "@mui/material";
const Signup = () => {
  return (
    <>
      <Box>
        <div className="formContainer">
          <form className="form">
            <div className="form-subcontainer">
              <div className="inputcontainer">
                <label>FirstName : </label>
                <input type="text" id="firstname" />
              </div>
              <div className="inputcontainer">
                <label>LastName : </label>
                <input type="text" id="lastname" />
              </div>
              <div className="inputcontainer">
                <label>Password : </label>
                <input type="password" id="password" />
              </div>
              <div className="inputcontainer">
                <label>Email : &#9993; </label>
                <input type="email" id="email" />
              </div>

              <label className="gender">
                <input type="radio" id="male" /> Male
                <input type="radio" id="female" /> Female
                <input type="radio" id="other" /> Other
              </label>
              <label className="checkbox">
                <input type="checkbox"></input> Forgot Password ?
              </label>
            </div>

            <div className="form-subcontainer">
              <div className="google">
                <GoogleIcon />
                <p>Login With Google</p>
              </div>
              <div className="twitter">
                <TwitterIcon />
                <p>Login With Twitter</p>
              </div>
              <div className="linkIn">
                <LinkedInIcon />
                <p>Login With LinkedIn </p>
              </div>
            </div>
            <Button
              variant="outlined"
              sx={{
                color: "#8b0000",
                position: "absolute",
                bottom: "10px",
                right: "10px",
              }}
            >
              Sign Up
            </Button>
          </form>
        </div>
      </Box>
    </>
  );
};

export default Signup;
