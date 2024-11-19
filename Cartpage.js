import React, { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';
import NavBar from './NavBar';
import HeroSection from './HeroSection';
import ProductCard from './ProductCard';

const CartPage = () => {
  const { state, dispatch } = useContext(CartContext);

  useEffect(() => {
    const data = {
      products: [
        {
          id: 1,
          title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
          price: 109.95,
          description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday.",
          category: "men's clothing",
          image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          rating: { rate: 3.9, count: 120 },
          quantity: 0,
        },
        {
          id: 2,
          title: "Mens Casual Premium Slim Fit T-Shirts ",
          price: 22.3,
          description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.",
          category: "men's clothing",
          image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
          rating: { rate: 4.1, count: 259 },
          quantity: 0,
        },
        {
          id: 3,
          title: "Mens Cotton Jacket",
          price: 55.99,
          description: "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors.",
          category: "men's clothing",
          image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
          rating: { rate: 4.7, count: 500 },
          quantity: 0,
        },
        {
          id: 4,
          title: "Mens Casual Slim Fit",
          price: 15.99,
          description: "The color could be slightly different between on the screen and in practice.",
          category: "men's clothing",
          image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
          rating: { rate: 2.1, count: 430 },
          quantity: 0,
        },
        {
          id: 5,
          title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
          price: 695,
          description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl.",
          category: "jewelery",
          image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
          rating: { rate: 4.6, count: 400 },
          quantity: 0,
        },
        {
          id: 6,
          title: "Solid Gold Petite Micropave",
          price: 168,
          description: "Satisfaction Guaranteed. Return or exchange any order within 30 days.",
          category: "jewelery",
          image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
          rating: { rate: 3.9, count: 70 },
          quantity: 0,
        },
        {
          id: 7,
          title: "White Gold Plated Princess",
          price: 9.99,
          description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her.",
          category: "jewelery",
          image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
          rating: { rate: 3, count: 400 },
          quantity: 0,
        },
        {
          id: 8,
          title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
          price: 10.99,
          description: "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
          category: "jewelery",
          image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
          rating: { rate: 1.9, count: 100 },
          quantity: 0,
        },
        {
          id: 9,
          title: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
          price: 64,
          description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity.",
          category: "electronics",
          image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
          rating: { rate: 3.3, count: 203 },
          quantity: 0,
        },
        {
          id: 10,
          title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
          price: 109,
          description: "Easy upgrade for faster boot up, shutdown, application load and response.",
          category: "electronics",
          image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
          rating: { rate: 2.9, count: 470 },
          quantity: 0,
        },
      ],
    };

    // Dispatch the products to the cart context
    dispatch({
      type: 'SET_ITEMS',
      payload: {
        items: data.products,
        totalQuantity: 0,
        totalAmount: 0,
      },
    });
  }, [dispatch]);

  return (
    <div>
      <NavBar />
      <HeroSection />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center', padding: '20px' }}>
        {state.items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2>Total Quantity: {state.totalQuantity}</h2>
        <h2>Total Amount: ${state.totalAmount.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default CartPage;