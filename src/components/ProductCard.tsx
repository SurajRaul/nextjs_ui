import Image from "next/image";
import React from "react";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

const ProductCard: React.FC<Product> = (props) => {
  const { id, title, image, price } = props;
  return (
    <div className="border p-4 rounded">
      <Image src={image} alt={title} width={300} height={300} />
      <h2 className="font-bold">{title}</h2>
      <p>${price}</p>
    </div>
  );
};

export default ProductCard;
