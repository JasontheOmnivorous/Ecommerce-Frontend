import { Card, CardHeader, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import { Product } from "../../types/product";

interface Props {
  product: Product;
}

const ItemCard = ({ product }: Props) => {
  return (
    <Link style={{ textDecoration: "none" }} to={`/item-list/${product._id}`}>
      <Card elevation={3} sx={{ width: 200, height: 200, m: 2 }}>
        <CardHeader title={product.name} />
        {product.coverImage ? <CardMedia image={product.coverImage} /> : ""}
      </Card>
    </Link>
  );
};

export default ItemCard;
