import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState({}); // todo: typings

  useEffect(() => {
    fetch(`/api/products/${ id }`) // todo create routing enum
      .then((r) => r.json())
      .then(setProduct);
  }, []);

  return (
    <>
      Id:
      { id }
      { JSON.stringify(product) }
    </>
  );
};

export default Product;
