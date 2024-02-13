import  { useEffect, useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import jwt_decode from 'jwt-decode';
import UserContext from './context/UserContext';
import CartContext from './context/CartContext';
import { fetchUserCart } from './helpers/fetchUserCartHelper';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainRoutes from './routes/MainRoutes';
import Loader from './components/Loader/Loader';

function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState(null);
  const [token, setToken] = useCookies(['jwt-token']);
  // const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  async function accessToken() {
    const res = await axios.get(`${import.meta.env.VITE_FAKE_STORE_URL}/accesstoken`, {withCredentials: true})
    setToken('jwt-token', res.data.token, {httpOnly: true});
    const tokenDetails = jwt_decode(res.data.token);
    setUser({username: tokenDetails.user, id: tokenDetails.id});
  }

  async function load() {
    if(!user) {
      await accessToken();
    }

    if(user) {
      await fetchUserCart(user.id, setCart);
    }
  }

  useEffect(() => {
    load();
  }, [user]);


  return (
    <>
   {isLoading ? <Loader /> : (
    <UserContext.Provider value={{ user, setUser }}>
      <CartContext.Provider value={{ cart, setCart }}>
        <div className="app-wrapper">
         
          <Header color="primary" dark={true} expand="md" container="md" />
          <MainRoutes />
          <Footer />
        </div>
      </CartContext.Provider>
    </UserContext.Provider>
   )}
    </>
  );
}

export default App;
