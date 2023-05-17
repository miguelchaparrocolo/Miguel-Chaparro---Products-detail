import {useLoaderData} from 'react-router-dom';
import './ProductCard.css';

const ProductCard = () => {
    const { product } = useLoaderData();

        return(
            <div className='container'>
                <h2>{product.title}</h2>
                <img src={product.image} alt="x"/>
                <p>{product.description}</p>
                <p>Category: {product.category}</p>
                <p>Price: $ {product.price}</p>
                <p>Rating: {product.rating}</p>
            </div>
        );
};

export default ProductCard;

// eslint-disable-next-line react-refresh/only-export-components
export const loaderProduct = async ({ params }) => {
    const { id } = params;
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
  
    return { product: data };
  };

