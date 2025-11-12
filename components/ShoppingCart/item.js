import ItemQuantity from "./itemQuantity";

function Item(props){
    const defaultProductImage = 'https://via.placeholder.com/150';

    function onQuantityChanged(event){
        props.onQuantityChanged(event);
    }

    return (
        <div className="container my-2">
            <div className="row">
                <div className="col-3">
                    <img src={defaultProductImage} className="img-thumbnail" />
                </div>
                <div className="col-6 py-5">
                    <h5>{props.product.title}</h5>
                    </div>
                <div className="col-2 py-5">
                    <ItemQuantity product={props.product} onQuantityChanged={onQuantityChanged} />
                </div>
                <div className="col-1 py-5 text-end">
                    <h4> R$ {props.product.unitPrice * props.product.qty}</h4>
                </div>
            </div>
        </div>
    );
}