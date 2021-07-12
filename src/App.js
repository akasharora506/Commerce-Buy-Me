import React, { useState, useEffect } from 'react';
import { Products, Navbar } from './components';
import { commerce } from './lib/commerce';

const App = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data);
    };

    const fetchCart = async () => {
        const cart = await commerce.cart.retrieve();
        setCart(cart);
    };

    const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);
        setCart(item.cart);
    };

    return (
        <div>
            <Navbar />
            <Products
                products={products}
                onAddToCart={handleAddToCart}
            />
        </div>
    )
}

export default App
