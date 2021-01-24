import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles.js';

const Product = (props) => {
    const { product } = props;
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} title={product.name} image={product.assets[0].url} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" className={classes.alignItemsCenter} gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography className={classes.alignItemsCenter} gutterBottom>
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{ __html: product.description }} color="textSecondary"></Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to cart">
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
