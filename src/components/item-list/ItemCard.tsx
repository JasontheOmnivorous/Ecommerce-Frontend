import { MonetizationOn } from "@mui/icons-material";
import { Box, Card, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Product } from "../../types/product";

interface Props {
  product: Product;
}

const ItemCard = ({ product }: Props) => {
  return (
    <Link style={{ textDecoration: "none" }} to={`/item-list/${product._id}`}>
      <Card
        elevation={3}
        sx={{
          width: 350,
          height: 350,
          m: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <CardContent>
          <Typography sx={{ fontWeight: "bold" }}>{product.name}</Typography>
          <img
            style={{ width: 150, height: 150, margin: 20 }}
            src={product.coverImage || ""}
            alt="product-image"
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MonetizationOn sx={{ fontSize: 30, color: "green" }} />
            <Typography sx={{ fontWeight: "bold" }}>{product.price}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ItemCard;
