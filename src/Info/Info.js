import Nav from './Nav';
import Footer from './Footer';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Info() {
    let data = useParams();
    let id = data.id; 
    const [product, setProduct] = useState(null);

    const getData = async () => {
            const resp = await fetch('/db/db.json'); 
            const data = await resp.json(); 

            const foundProduct = data.product.find((item) => item.id === parseInt(id));
                setProduct(foundProduct); 
    };

    useEffect(() => {
        getData();
    }, [id]);

    return (
        <>
            <Nav />
            <section className="mt-4">
                <div className="container">
                    {product ? (
                        <>
                            <img className="mx-auto d-block w-25 h-25 mb-3 shadow-lg p-1 rounded" src={product.image} alt={product.title} />
                            <h3 className="text-capitalize fw-bold text-light shadow p-3 mb-2">{product.title}</h3>
                            <p className="text-light fs-5 shadow p-3 mb-5">{product.description}</p>
                        </>
                    ) : (
                        <p className="text-light">Loading...</p> 
                    )}
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Info;
