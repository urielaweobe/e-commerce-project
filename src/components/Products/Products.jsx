import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
    { id: 1, name: 'Shoes', description: 'Running shoes', price: '$5', image: 'https://media.gq.com/photos/60edfcd7c2cedd91d642931b/master/w_2000,h_1333,c_limit/Nike-Winflo-8-shoe.jpg' },
    { id: 2, name: 'Macbook', description: 'Apple mackbook', price: '$10', image: 'https://cdn.mos.cms.futurecdn.net/uWjEogFLUTBc8mSvagdiuP.jpg' },
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