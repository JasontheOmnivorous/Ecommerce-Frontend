import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";

interface Props {
  onChange: (
    evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder: string;
}

const PasswordField = ({ onChange, placeholder }: Props) => {
  const [eye, setEye] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("password");

  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <TextField
        type={password}
        variant="standard"
        sx={{ width: 300, m: 2 }}
        placeholder={placeholder}
        onChange={onChange}
      />
      {eye ? (
        <Button
          onClick={() => {
            setEye(!eye);
            setPassword("password");
          }}
        >
          <Visibility sx={{ color: "black" }} />
        </Button>
      ) : (
        <Button
          onClick={() => {
            setEye(!eye);
            setPassword("text");
          }}
        >
          <VisibilityOff sx={{ color: "black" }} />
        </Button>
      )}
    </Box>
  );
};

export default PasswordField;
