import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import jwt_decode from 'jwt-decode';

import Home from './pages/Home/Home';
import ProductList from './pages/ProductList/ProductList';
import Login from './pages/Login/Login';
import { selectUser } from './features/user/userSlice';
import Cart from './pages/Cart/Cart';
import { API, refreshTokenApi } from './Api/tokenApi';
import { IJWTAccessToken, ITokens } from './interfaces/interfaces';

function App() {
  const user = useSelector(selectUser);

  const getAccessToken = async (tokens: ITokens) => {
    if (user) {
      const res = await refreshTokenApi(tokens);

      return res.data;
    }
  };

  API.interceptors.request.use(
    async (config) => {
      if (user) {
        try {
          const { exp } = jwt_decode<IJWTAccessToken>(user.accessToken);
          // console.log(decoded);
          if (exp < (new Date().getTime() + 1) / 1000) {
            let tokens = await getAccessToken({
              accessToken: user.accessToken,
              refreshToken: user.refreshToken,
            });
            console.log(tokens);
            if (tokens && config.headers) {
              console.log(config);
              config.headers = {
                Authorization: `Bearer ${tokens.accessToken}`,
              };
              return config;
            }
          }
        } catch (error) {
          console.log(error);
        }
      }
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return (
    <Router>
      <Switch>
        <Route path='/cart'>
          {!user ? <Redirect to='/login' /> : <Cart />}
        </Route>
        <Route path='/register'>
          {user ? <Redirect to='/' /> : <Login Register />}
        </Route>
        <Route path='/login'>
          {user ? <Redirect to='/' /> : <Login Register={false} />}
        </Route>
        <Route path={['/products/:category', '/products']}>
          <ProductList />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
