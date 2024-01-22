import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { config } from "../../config/config";
import { LoginType } from "../../types/auth";
import PasswordField from "../../utils/PasswordField";

interface Props {
  loginOpen: boolean;
  setLoginOpen: (val: boolean) => void;
  setOpen: (val: boolean) => void;
}

const Login = ({ loginOpen, setLoginOpen, setOpen }: Props) => {
  const [login, setLogin] = useState<LoginType>({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const responseObj = await fetch(`${config.apiBaseUrl}/users/login`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(login),
      });
      const response = await responseObj.json();
      Cookies.set("authToken", response.token, {
        expires: 7,
        secure: true,
        sameSite: "strict",
      });
      navigate("/item-list");
      setLoginOpen(false);
      setOpen(false);
    } catch (err) {
      return console.log(err);
    }
  };

  return (
    <Dialog open={loginOpen} onClose={() => setLoginOpen(false)}>
      <DialogTitle sx={{ display: "flex", justifyContent: "center" }}>
        <Typography sx={{ fontWeight: "bold" }}>Login</Typography>
      </DialogTitle>
      <DialogContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField
          onChange={(event) =>
            setLogin({ ...login, email: event.target.value })
          }
          variant="standard"
          sx={{ m: 2, width: 360 }}
          placeholder="Email"
        />
        <PasswordField
          placeholder="Password"
          onChange={(event) =>
            setLogin({ ...login, password: event.target.value })
          }
        />
        <DialogActions>
          <Button
            onClick={handleLogin}
            sx={{
              borderRadius: 20,
              borderColor: "#8b0000",
              color: "#8b0000",
              ":hover": {
                borderColor: "red",
              },
            }}
            variant="outlined"
          >
            Login
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  );
};

export default Login;
