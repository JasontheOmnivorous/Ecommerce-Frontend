import { useNavigate } from "react-router-dom";
import SignInPic from "./../../assets/signin_pic.jpg";

import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { config } from "../../config/config";
import { SignupType } from "../../types/auth";
import PasswordField from "../../utils/PasswordField";
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
      navigate("/item-list"); // nevigate the user to the home page after signing up
      setOpen(false);
      setLoginOpen(false);
    } catch (err) {
      return console.log(err);
    }
  };

  return (
    <Dialog maxWidth="md" open={open} onClose={() => setOpen(false)}>
      <Login
        loginOpen={loginOpen}
        setLoginOpen={setLoginOpen}
        setOpen={setOpen}
      />
      <DialogTitle sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ fontWeight: "bold" }}>Signin</Typography>
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
            <PasswordField
              placeholder="Password"
              onChange={(event) =>
                setSignin({ ...signin, password: event.target.value })
              }
            />
            <PasswordField
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
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default Signup;
