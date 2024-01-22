import { Box, Button, Typography } from "@mui/material";
import Cookies from "js-cookie";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  children: ReactNode;
}

const AuthGuard = ({ children }: Props) => {
  const isAuthenticated = Cookies.get("authToken");
  const navigate = useNavigate();

  if (!isAuthenticated) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Typography sx={{ m: 2 }} variant="h1">
          Unauthorized!
        </Typography>
        <Typography sx={{ m: 2 }}>
          Please sing in first to use the app...
        </Typography>
        <Button onClick={() => navigate("/")} sx={{ m: 2 }} variant="outlined">
          ← Go back to home page
        </Button>
      </Box>
    );
  }

  return <>{children}</>;
};

export default AuthGuard;
