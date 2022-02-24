import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
    { id: 1, name: 'Shoes', description: 'Running shoes', price: '$5' },
    { id: 2, name: 'MAcbook', description: 'Apple mackbook', price: '$10' },
]

const Products = () => {
    return (
        <main>
            <Grid container justifyContent="center" spacing={4}>
                {products.map((p) => (
                    <Grid item key={p.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={p} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;