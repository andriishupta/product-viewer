import React, { useEffect, useState } from 'react';
import { Message } from '@product-viewer/api-interfaces';

const Products = () => {
  const [m, setMessage] = useState<Message>({ message: '' });

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to product-viewer-app!</h1>
        <img
          width="450"
          src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png"
        />
      </div>
      <div>{m.message}</div>

      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </>
  );
};

export default Products;
