import { useContext, useEffect, useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
 
  NavbarText,
} from 'reactstrap';

import './Header.css';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
// CSS import
import './Header.css';
// Context import
import UserContext from '../../context/UserContext';
import CartContext from '../../context/CartContext';
function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken, removeToken] = useCookies(['jwt-token']);
  const {cart, setCart} = useContext(CartContext);
  const {user, setUser} = useContext(UserContext);
  const toggle = () => setIsOpen(!isOpen);

  function logout() {
    removeToken('jwt-token', {httpOnly: true});
    axios.get(`${import.meta.env.VITE_FAKE_STORE_URL}/logout`, {withCredentials: true});
    setUser(null);
    setCart(null)
  }

  useEffect(() => {
    console.log("user", user)
  }, [token]);
  console.log(token);

  return (
    <div className='nav-res'>
          <Navbar {...props}>
        <NavbarBrand id="title">
          <Link to="/">Shop Cart</Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
           
              { user && <NavbarText> <Link to={`/cart/${user.id}`}>Cart {cart && cart.products && `(${cart.products.length})`}</Link></NavbarText> }
              
              
           
            {user && <NavbarText>{user.username}</NavbarText>}
            <NavbarText>
                  {token['jwt-token'] ? <Link onClick={() => {
                  
                    logout();
                  }} to="/signin">Logout</Link> : <Link to="/signin">SignIn</Link>}
              </NavbarText>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
