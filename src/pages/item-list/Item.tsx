import { MonetizationOn } from "@mui/icons-material";
import { Box, Card, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

const Item = () => {
  const { id } = useParams();
  const products = useAppSelector((store) => store.product.items);
  const product = products.find((item) => item._id === String(id));

  return (
    <Card
      elevation={3}
      sx={{
        width: 600,
        height: 400,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: 3,
      }}
    >
      <Typography sx={{ p: 2 }} variant="h4">
        {product?.name}
      </Typography>
      <Typography sx={{ p: 2 }}>{product?.description}</Typography>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <MonetizationOn sx={{ fontSize: 30, color: "green" }} />
        <Typography>{product?.price}</Typography>
      </Box>
    </Card>
  );
};

export default Item;
