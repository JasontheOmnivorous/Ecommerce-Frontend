import { AddCircle, MonetizationOn, RemoveCircle } from "@mui/icons-material";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import { useAppSelector } from "../../store/hooks";

const CartPage = () => {
  const cartItems = useAppSelector((store) => store.cart.items);
  console.log(cartItems.map((item) => item));

  if (!cartItems) return null;

  return (
    <Box sx={{ width: "100vw" }}>
      <Box>
        {cartItems.map((item) => (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            key={item._id}
          >
            <Card elevation={3} sx={{ width: 400, height: 400 }}>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography sx={{ fontWeight: "bold" }}>{item.name}</Typography>
                <img
                  style={{ width: 150, height: 150 }}
                  src={item.coverImage || ""}
                  alt="product-image"
                />
                <Typography>{item.description}</Typography>
                <Box>
                  <MonetizationOn sx={{ fontSize: 30, color: "green" }} />
                  <Typography sx={{ fontWeight: "bold" }}>
                    {item.price}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button sx={{ mr: 2 }}>
                <AddCircle sx={{ fontSize: 50, color: "green" }} />
              </Button>
              <Typography sx={{ mr: 2 }}>{item.quantity}</Typography>
              <Button sx={{ mr: 2 }}>
                <RemoveCircle sx={{ fontSize: 50, color: "crimson" }} />
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
      <Box></Box>
    </Box>
  );
};

export default CartPage;