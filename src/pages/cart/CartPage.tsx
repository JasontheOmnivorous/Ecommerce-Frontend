import { AddCircle, MonetizationOn, RemoveCircle } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Snackbar,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { clearCart, updateQuantity } from "../../store/slices/cartSlice";
import { createOrder } from "../../store/slices/orderSlice";

const CartPage = () => {
  const [open, setOpen] = useState<boolean>(false);
  const cartItems = useAppSelector((store) => store.cart.items);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  console.log(cartItems);

  const handleIncrease = (_id: string, quantity: number) => {
    dispatch(updateQuantity({ _id, quantity }));
  };

  const handleDecrease = (_id: string, quantity: number) => {
    dispatch(updateQuantity({ _id, quantity }));
  };

  const calcTotalPrice = () => {
    let totalPrice = 0;
    cartItems.forEach((item) => (totalPrice += item.price * item.quantity));
    return totalPrice;
  };

  const onSuccess = () => {
    setOpen(true);
    setTimeout(() => {
      navigate("/item-list");
      dispatch(clearCart([]));
    }, 3000);
  };

  const handleConfirmOrder = () => {
    dispatch(
      createOrder({
        orderItems: cartItems,
        totalPrice: calcTotalPrice(),
        onSuccess,
      })
    );
  };

  if (cartItems.length <= 0)
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontWeight: "bold", margin: 2 }}>
          Please add some items first...
        </Typography>
        <Button
          onClick={() => navigate("/item-list")}
          sx={{ margin: 2 }}
          variant="outlined"
        >
          ← Add items
        </Button>
      </Box>
    );

  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
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
            <Card elevation={3} sx={{ width: 600, height: 400 }}>
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
              <Button
                onClick={() => handleIncrease(item._id, item.quantity + 1)}
                sx={{ mr: 2 }}
              >
                <AddCircle sx={{ fontSize: 50, color: "green" }} />
              </Button>
              <Typography sx={{ mr: 2 }}>{item.quantity}</Typography>
              <Button
                onClick={() => handleDecrease(item._id, item.quantity - 1)}
                sx={{ mr: 2 }}
              >
                <RemoveCircle sx={{ fontSize: 50, color: "crimson" }} />
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          m: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography sx={{ fontWeight: "bold", m: 2 }}>
          Total Price: {calcTotalPrice()}
        </Typography>
        <Button onClick={handleConfirmOrder} sx={{ m: 2 }} variant="contained">
          confirm order
        </Button>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={() => setOpen(false)}
        >
          <Alert
            onClose={() => setOpen(false)}
            severity="success"
            sx={{ width: "100%" }}
          >
            Ordered successfully!
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default CartPage;
