import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box } from "@mui/material";
const Signup = () => {
  return (
    <>
      <Box>
        <div className="formContainer">
          <form className="form">
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
              <label>Email : </label>
              <input type="email" id="email" />
            </div>

            <label>
              <input type="radio" /> Male
              <input type="radio" /> Female
              <input type="radio" /> Other
            </label>
            <label>
              <input type="checkbox"></input> Forgot Password
            </label>
            <div className="brakeLine"></div>
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
              <p>Login With LinkedIn</p>
            </div>
          </form>
        </div>
      </Box>
    </>
  );
};

export default Signup;
