import { useNavigate } from "react-router-dom";
import SignInPic from "./../../assets/signin_pic.jpg";

import { LinkedIn, Twitter } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { config } from "../../config/config";
import { SignupType } from "../../types/auth";
import Login from "./Login";

interface Props {
  open: boolean;
  setOpen: (val: boolean) => void;
}

const Signup = ({ open, setOpen }: Props) => {
  const [signin, setSignin] = useState<SignupType>({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [loginOpen, setLoginOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const responseObj = await fetch(`${config.apiBaseUrl}/users/signup`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(signin),
      });
      const token = await responseObj.json();
      // store responded token inside localstorage for further usage
      localStorage.setItem("authToken", token.token);
      navigate("/home"); // nevigate the user to the home page after signing up
    } catch (err) {
      return console.log(err);
    }
  };

  return (
    <Dialog maxWidth="md" open={open} onClose={() => setOpen(false)}>
      <Login loginOpen={loginOpen} setLoginOpen={setLoginOpen} />
      <DialogTitle sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ fontWeight: "bold" }} variant="h4">
          Signin
        </Typography>
        <Button
          onClick={() => setLoginOpen(true)}
          sx={{
            color: "#8b0000",
            borderRadius: 20,
            borderColor: "#8b0000",
            ":hover": {
              borderColor: "red",
            },
          }}
          variant="outlined"
        >
          Login
        </Button>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ display: "flex", justifyContent: "space-evenly", pl: 2 }}>
          {/* Inputs */}
          <Box>
            <TextField
              variant="standard"
              sx={{ width: 300, m: 2 }}
              placeholder="Username"
              onChange={(event) =>
                setSignin({ ...signin, name: event.target.value })
              }
            />
            <TextField
              variant="standard"
              sx={{ width: 300, m: 2 }}
              placeholder="Email"
              onChange={(event) =>
                setSignin({ ...signin, email: event.target.value })
              }
            />
            <TextField
              variant="standard"
              sx={{ width: 300, m: 2 }}
              placeholder="Password"
              onChange={(event) =>
                setSignin({ ...signin, password: event.target.value })
              }
            />
            <TextField
              variant="standard"
              sx={{ width: 300, m: 2 }}
              placeholder="Please confirm your password..."
              onChange={(event) =>
                setSignin({ ...signin, passwordConfirm: event.target.value })
              }
            />
          </Box>
          {/* Image */}
          <img style={{ width: 300, height: 280 }} src={SignInPic} />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Button
            onClick={handleSignup}
            variant="outlined"
            sx={{
              color: "#8b0000",
              borderRadius: 20,
              borderColor: "#8b0000",
              width: "fit-content",
              mb: 2,
              ":hover": {
                borderColor: "red",
              },
            }}
          >
            Sign Up
          </Button>
          <Box sx={{ m: 2 }}>
            <GoogleLogin
              shape="pill"
              size="large"
              width={300}
              onSuccess={(credentialResponse) => {
                console.log("Credential response: ", credentialResponse);
                const decoded = jwtDecode(
                  credentialResponse.credential as string
                );
                console.log(decoded);
              }}
              onError={() => {
                console.log("Login failed.");
              }}
            />
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              border: "2px solid black",
              p: 1,
              borderRadius: 20,
              mb: 2,
              width: "100%",
              cursor: "pointer",
            }}
          >
            <Twitter sx={{ fontSize: 30, mr: 2 }} />
            <Typography sx={{ fontWeight: "bold", cursor: "pointer" }}>
              Signin with Twitter
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              border: "2px solid black",
              p: 1,
              borderRadius: 20,
              mb: 2,
              width: "100%",
              cursor: "pointer",
            }}
          >
            <LinkedIn sx={{ fontSize: 30, mr: 2 }} />
            <Typography sx={{ fontWeight: "bold", cursor: "pointer" }}>
              Signin with LinkedIn
            </Typography>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default Signup;
