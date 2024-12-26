import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Card() {
    const [products, setProducts] = useState([]);

    const getData = async () => {
            const resp = await fetch('/db/db.json'); 
            const data = await resp.json(); 
                setProducts(data.product); 
            
    };

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        console.log(products); 
    }, [products]);

    return (
        <>
            {/* Card */}
            <section>
                <div className="container">
                    {products.length > 0 ? (
                        products.map((product) => (
                            <div className="card d-inline-block mb-3" style={{ width: '16rem', marginLeft: '8px' }} key={product.id}>
                                <img src={product.image} className="card-img-top" alt={product.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">Price: {product.Price}</p>
                                    <Link to={`/info/${product.id}`} className="btn btn-primary">
                                        See more
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>Loading products...</p>
                    )}
                </div>
            </section>
        </>
    );
}

export default Card;
