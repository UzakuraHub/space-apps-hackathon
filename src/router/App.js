import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Dashboard from '../components/dashboard/Dashboard';
import profileSetup from '../components/dashboard/ProfileSetup';
import Settings from '../components/dashboard/Settings';
import UpdateProfile from '../components/dashboard/UpdateProfile';
import Warnings from '../components/dashboard/Warnings';
import Login from '../pages/Login';
import Register from '../pages/Register';

const App = () => {
  return (
    <div>
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
