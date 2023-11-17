import GoogleIcon from "@mui/icons-material/Google";
import SignInPic from './../../assets/signin_pic.jpg';

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

interface Props {
  open: boolean;
  setOpen: (val: boolean) => void;
}

const Signup = ({ open, setOpen }: Props) => {
  return (
    <Dialog maxWidth="md" open={open} onClose={() => setOpen(false)}>
      <DialogTitle sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ fontWeight: "bold" }} variant="h4">
          Signin
        </Typography>
        <Button
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
            />
            <TextField
              variant="standard"
              sx={{ width: 300, m: 2 }}
              placeholder="Email"
            />
            <TextField
              variant="standard"
              sx={{ width: 300, m: 2 }}
              placeholder="Password"
            />
            <TextField
              variant="standard"
              sx={{ width: 300, m: 2 }}
              placeholder="Please confirm your password..."
            />
          </Box>
          {/* Image */}
          <img style={{ width: 300, height: 280 }} src={SignInPic} />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
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
            <GoogleIcon sx={{ fontSize: 30, mr: 2 }} />
            <Typography sx={{ fontWeight: "bold" }}>
              Signin with Google
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
        <Button
          variant="outlined"
          sx={{
            color: "#8b0000",
            borderRadius: 20,
            borderColor: "#8b0000",
            ":hover": {
              borderColor: "red",
            },
          }}
        >
          Sign Up
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default Signup;
