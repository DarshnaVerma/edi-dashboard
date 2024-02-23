import { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import './App.css';
import LoginPage from './pages/login/login';
import DashboardPage from './pages/dashboard/dashboard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    Boolean(localStorage.getItem('authenticated'))
  );


  const login = () => {
    // Perform authentication logic here
    // For simplicity, let's just set isAuthenticated to true
    setIsAuthenticated(true);
    localStorage.setItem('authenticated', true);
  };

  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route exact path='/login'>
            <LoginPage isAuthenticated={isAuthenticated} login={login} />
          </Route>
          <PrivateRoute
            exact path='/dashboard'
            isAuthenticated={isAuthenticated}
            component={DashboardPage}
          />
          <Route path='*'>
            <Redirect to='/login' />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const PrivateRoute = ({ isAuthenticated, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to='/login' />
      }
    />
  );
};


// Define propTypes for PrivateRoute component
PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired, // isAuthenticated prop should be a boolean and is required
  component: PropTypes.elementType.isRequired, // component prop should be a React element type and is required
};

export default App;
