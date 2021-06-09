import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProductAPI from '../api/productAPI';

const ProductDetailPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({})
    useEffect(() => {
        const getProduct = async () => {
            try {
                const { data } = await ProductAPI.get(id);
                console.log(data);
                setProduct(data);
            } catch (error) {

            }
        }
        getProduct();
    }, [])
    return (
        <div>
            {product.name}
        </div>
    )
}

export default ProductDetailPage
