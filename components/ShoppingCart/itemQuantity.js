function ItemQuantity(props){
    function buildQuantityEventChanged(increment){
        return {
            product: props.product,
            newQty: props.quantity.qty + increment,
        };
    }

    function decrement(){
        props.onQuantityChanged(buildQuantityEventChanged(-1));
    }

    function increment(){
        props.onQuantityChanged(buildQuantityEventChanged(1));
    }

    function handleChange(event){
        props.onQuantityChanged({
            ...buildQuantityEventChanged(event.target.value - props.quantity.qty)
        });
    }

    return (
        <div className="item-quantity">
            <button
                className="decrement" type="button"
                onClick={decrement}
            >
                -
            </button>
            <input
                type="number"
                value={props.quantity.qty}
                onChange={handleChange}
            />
            <button
                className="increment" type="button"
                onClick={increment}
            >
                +
            </button>
        </div>
    );
}
export default ItemQuantity;
