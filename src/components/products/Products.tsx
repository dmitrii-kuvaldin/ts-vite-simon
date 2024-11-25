import { useEffect, useState } from 'react';
import { IProduct } from "../../types/types";
import styles from './products.module.css';
import ShopProduct from "../shopProduct/ShopProduct";
import Cart from '../cart/Cart';


export default function Products() {
  const [products, setProducts] = useState<IProduct[]>([]);


  // * асинхронный запрос на сервер
  const getProducts = async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <Cart />
      <div className={styles.shopContainer}>
        {products.map(el => (
         <ShopProduct key={el.id} price={el.price} id={el.id} title={el.title} image={el.image} />
        ))}
      </div>
    </div>
  );
}