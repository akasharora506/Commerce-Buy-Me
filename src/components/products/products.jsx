import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const Products = ({ products }) => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <Grid container justify="space-between" spacing={4}>
                {
                    products.map((d) =>
                        <Grid item key={d.id} xs={12} sm={6} md={4} lg={3}>
                            <Product product={d} />
                        </Grid>
                    )
                }
            </Grid>
        </main>
    );
}

export default Products;