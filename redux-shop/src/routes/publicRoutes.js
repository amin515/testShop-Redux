import { createBrowserRouter } from 'react-router-dom';
import Shop from '../pages/Shop/Shop';
import Layout from '../components/Layout/Layout';
import Admin from '../pages/Admin/Admin';
import Cart from '../pages/Cart/Cart';
import WishList from '../pages/WishList/WishList';
import SingleProduct from '../pages/SingleProduct/SingleProduct';
import Dashboard from '../components/AdminPanel/Dashboard/Dashboard';
import Products from '../components/AdminPanel/Products/Products';
import Category from '../components/AdminPanel/Category/Category';
import Tags from '../components/AdminPanel/Tags/Tags';
import Brands from '../components/AdminPanel/Brands/Brands';

// create public routes

const publicRoute = createBrowserRouter([
    {
        path : '/',
        element : <Layout /> ,
        children : [
            {
                path : 'shop',
                element : <Shop/>
            },
            {
                path : 'admin',
                element : <Admin/>,
                children : [
                    {
                        path : 'dashboard',
                        element : <Dashboard />
                    },
                    {
                        path : 'products',
                        element : <Products />
                    },
                    {
                        path : 'category',
                        element : <Category />
                    },
                    {
                        path : 'tag',
                        element : <Tags />
                    },
                    {
                        path : 'brand',
                        element : <Brands />
                    },
                ]
            },
            {
                path : 'cart',
                element : <Cart/>
            },
            {
                path : 'wishlist',
                element : <WishList/>
            },
            {
                path : 'single-product',
                element : <SingleProduct/>
            },
        ]
    }
]);

// export 
export default publicRoute;