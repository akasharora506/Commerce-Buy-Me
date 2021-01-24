import React, { useState, useEffect } from 'react';
import { Products, Navbar } from './components';
import { commerce } from './lib/commerce';

const App = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data);
    };

    return (
        <div>
            <Navbar />
            <Products products={products} />
        </div>
    )
}

export default App
