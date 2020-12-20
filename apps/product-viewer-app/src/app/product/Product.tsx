import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      Id:
      { id }
    </>
  );
};

export default Product;
