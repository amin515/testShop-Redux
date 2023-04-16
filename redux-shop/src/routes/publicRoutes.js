import { createBrowserRouter } from 'react-router-dom';
import Shop from '../pages/Shop/Shop';
import Layout from '../components/Layout/Layout';
import Admin from '../pages/Admin/Admin';
import Cart from '../pages/Cart/Cart';
import WishList from '../pages/WishList/WishList';

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
                element : <Admin/>
            },
            {
                path : 'cart',
                element : <Cart/>
            },
            {
                path : 'wishlist',
                element : <WishList/>
            },
        ]
    }
]);

// export 
export default publicRoute;