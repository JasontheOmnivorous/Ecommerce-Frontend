import { MonetizationOn } from "@mui/icons-material";
import { Box, Button, Card, CardActions, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addToCart } from "../../store/slices/cartSlice";

const Item = () => {
  const { id } = useParams();
  const products = useAppSelector((store) => store.product.items);
  const product = products.find((item) => item._id === String(id));
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    navigate("/item-list");
  };

  return (
    <Card
      elevation={3}
      sx={{
        width: 800,
        height: 700,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        p: 10,
      }}
    >
      <Typography sx={{ p: 2 }} variant="h4">
        {product?.name}
      </Typography>
      <img
        style={{ width: 300, height: 300, margin: 20 }}
        src={product?.coverImage || ""}
        alt="product-image"
      />
      <Typography sx={{ p: 2 }}>{product?.description}</Typography>
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <MonetizationOn sx={{ fontSize: 30, color: "green" }} />
        <Typography sx={{ fontWeight: "bold" }}>{product?.price}</Typography>
      </Box>
      <CardActions sx={{ m: 2 }}>
        <Button onClick={handleAddToCart} variant="contained">
          add to cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default Item;
