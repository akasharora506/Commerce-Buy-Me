import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';

const products = [
    { id: 1, name: 'Shoes', description: 'Running Shoes', price: '₹7500', image: 'https://i01.appmifile.com/webfile/globalimg/in/cms/29240E25-6C4B-4386-5C66-91CE898B0EBB.jpg' },
    { id: 2, name: 'Macbook', description: 'Apple Macbook', price: '₹101000', image: 'https://media.wired.com/photos/59e952e4f572231fe56c3937/master/w_2560%2Cc_limit/rosegold-macbook-1.jpg' },
    { id: 3, name: 'Recliner', description: 'Recliner studio best', price: '₹20000', image: 'https://secure.img1-ag.wfcdn.com/im/35638103/resize-h600-w600%5Ecompr-r85/3005/30057030/Recliners.jpg' },
];

const Products = () => {
    return (<main>
        <Grid container justify="center" spacing={4}>
            {
                products.map((d) =>
                    <Grid item key={d.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={d} />
                    </Grid>
                )
            }
        </Grid>
    </main>)
}

export default Products;