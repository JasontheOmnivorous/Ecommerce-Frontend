import { Box } from "@mui/material";
import { useEffect } from "react";
import ItemCard from "../../components/item-list/ItemCard";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getProducts } from "../../store/slices/productSlice";

const ItemListPage = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((store) => store.product.items);
  if (!products) return null;

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {products?.map((product) => (
        <ItemCard key={product._id} product={product} />
      ))}
    </Box>
  );
};

export default ItemListPage;
