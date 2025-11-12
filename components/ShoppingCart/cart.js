import { userEffect, useState } from 'react';

import ItemsList from './itemsList';
import Summary from './summary';

function Cart(props) {
    const [ products, setProducts ] = useState([]);

    userEffect(() => {
        setProducts(props.cart.products);
    }, []);

    function onQuantityChanged(event){
        for (const product of props.cart.products) {
            if (product.code === event.product.code) {
                product.qty = event.newQty;
                setProducts(props.cart.products.map((x) => (x)));
                break;
            }
        }
    }

    return (
        <div>
            <hr />
            <ItemsList products={products} onQuantityChanged={onQuantityChanged}/>
            <hr />
            <Summary products={products} />
        </div>
    );
}

export default Cart;
