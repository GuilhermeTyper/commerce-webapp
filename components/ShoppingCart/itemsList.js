import Item from './item';

function ItemsList(props){
    function onQuantityChanged(event){
        props.onQuantityChanged(event);
    }

    let rows = [];
    props.products.forEach((product, index) => {
        rows.push(
            <Item key={index} product={product} onQuantityChanged={onQuantityChanged} />
        );
    });

    return (
        <div>
            {rows}
        </div>
    );
}
export default ItemsList;