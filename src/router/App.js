import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
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
        </Switch>
      </Router>
    </div>
  );
};

export default App;
