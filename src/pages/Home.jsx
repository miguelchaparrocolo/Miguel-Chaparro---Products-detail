import { useLoaderData, Link } from 'react-router-dom';
import './Home.css'
import Clock from '../components/Clock';

const Home = () => {
    const { products = [] } = useLoaderData();

        return (
            <div>
                <div className='title'><h2>Products</h2></div>
                <div className='container'>
                    {products.map((item, index) =>(
                        <div className='container__product' key={ index }>
                            <img src={item.image} alt=''></img>
                            <div className='container__product--name'>
                                {item.title}
                            </div>
                            {console.log(item.id)}
                            <Link to={`/productcard/2`}>
                               
                                <Clock/>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        );
}

export default Home;

    // eslint-disable-next-line react-refresh/only-export-components
    export const loaderProducts = async () => {
        const response = await fetch ('https://fakestoreapi.com/products');
            const data = await response.json();
                
                return { products: data};
    };
