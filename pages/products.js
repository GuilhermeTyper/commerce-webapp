"use client";

function Installments (props) {
    const fees = props.installments.hasFee ? "com juros" : "sem juros";
    return (
        <p>
            em {props.installments.number} x de R$ {props.installments.total} {fees}
        </p>
    );
}

function ProductListItem (props) {
    const defaultProductImage = "https://via.placeholder.com/150";
    return (
        <div className="d-flax position-relative boder my-2">
            <img
                src={defaultProductImage}
                className="flex-shrink-0 me-3"/>
            <div>
                <a href='#' className='stretched-link'>
                <h3 className="mt-0">{props.product.title}</h3>
                </a>
                <h4> R$ {props.product.amount}</h4>
                <Installments installments={props.product.installments} />
            </div>
        </div>
    );
}

export default function ProductsForSaleList () {
    const json_products = [
        {
            "id": 1,
            "title": "Caneca Personalizada de Porcelana",
            "amount": 123.45,
            "installments": {
                "number": 3,
                "total": 41.15,
                "hasFee": true
            }
        },
        {
            "id": 2,
            "title": "Caneca de Tulipa",
            "amount": 123.45,
            "installments": {
                "number": 3,
                "total": 41.15,
                "hasFee": false
            },
        }
    ];

    const products = json_products.map((x, index) =>
        <ProductListItem product={x} key={index} />
    );
    
    return (
        <div>
            {products}
        </div>
    );
}