import { Box } from "@mui/material";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getOrders } from "../../store/slices/orderSlice";

const OrderPage = () => {
  const orderedItems = useAppSelector((store) => store.order.items);

  console.log("orderItems: ", orderedItems);
  console.log("orderProducts: ");
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  if (!orderedItems) return null;

  return <Box></Box>;
};

export default OrderPage;
