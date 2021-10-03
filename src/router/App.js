import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Dashboard from '../pages/dashboard/Dashboard';
import profileSetup from '../pages/dashboard/ProfileSetup';
import Settings from '../pages/dashboard/Settings';
import UpdateProfile from '../pages/dashboard/UpdateProfile';
import Warnings from '../pages/dashboard/Warnings';
import Login from '../pages/Login';
import Register from '../pages/Register';

const App = () => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Router>
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/login' exact component={Login} />
          <Route path='/register' exact component={Register} />
          <Route path='/dashboard' exact component={Dashboard} />
          <Route path='/settings' exact component={Settings} />
          <Route path='/warnings' exact component={Warnings} />
          <Route path='/profileSetup' exact component={profileSetup} />
          <Route path='/updateProfile' exact component={UpdateProfile} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
