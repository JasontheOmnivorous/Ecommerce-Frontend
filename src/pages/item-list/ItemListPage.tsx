import { Box } from "@mui/material";
import { useEffect } from "react";
import ItemCard from "../../components/item-list/ItemCard";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { getProducts } from "../../store/slices/product";

const ItemListPage = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((store) => store.product.items);
  if (!products) return null;

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      {products?.map((product) => (
        <ItemCard key={product.id} product={product} />
      ))}
    </Box>
  );
};

export default ItemListPage;
