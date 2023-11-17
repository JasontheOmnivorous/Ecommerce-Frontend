import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { config } from "../../config/config";
import { LoginType } from "../../types/auth";

interface Props {
  loginOpen: boolean;
  setLoginOpen: (val: boolean) => void;
}

const Login = ({ loginOpen, setLoginOpen }: Props) => {
  const [login, setLogin] = useState<LoginType>({ email: "", password: "" });

  const handleLogin = async () => {
    try {
      const responseObj = await fetch(`${config.apiBaseUrl}/users/login`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(login),
      });
      const token = await responseObj.json();
      localStorage.setItem("authToken", token.token);
    } catch (err) {
      return console.log(err);
    }
  };

  return (
    <Dialog open={loginOpen} onClose={() => setLoginOpen(false)}>
      <DialogTitle sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Login
        </Typography>
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
          sx={{ m: 2, width: 300 }}
          placeholder="Email"
        />
        <TextField
          onChange={(event) =>
            setLogin({ ...login, password: event.target.value })
          }
          variant="standard"
          sx={{ m: 2, width: 300 }}
          placeholder="Password"
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
