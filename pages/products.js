import { useState, useEffect } from 'react';
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
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://127.0.0.1:5000/products")
            .then((resp) => {
                console.log('resposta Bruta',resp);
                if (!resp.ok) {
                    throw new Error('A resposta da rede não foi ok ' + resp.statusText);
                }
                return resp.json();
            })
            .then(
                (json) => {
                    console.log('dados recebidos',json);
                    setIsLoaded(true);
                    setProducts(json);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            );
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        const p = products.map((x) => (
            <ProductListItem product={x} key={x.id} />
        ));
        return (
            <div>
                {p}
            </div>
        );
    }
}
