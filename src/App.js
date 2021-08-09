import Login from './pages/login/login';
import SignUp from './pages/register/register';
import Home from './pages/home/index';
import Contact from './pages/contacts/contacts';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NotFound from './pages/notFount';
import UserProfile from './pages/user';
import DetailPage from './pages/contacts/detail/detail';
import ProtectedRoute from './protected.route';
import Loader from "react-loader-spinner";

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';

import getStore from './redux/store'

export const {store, persistor} = getStore()

function App() {
  return (
    <Provider store={store}>

      <div className="App">
        <Router>
          <PersistGate loading={<Loader type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000} />} persistor={persistor}>
            <Switch>
              <Route path="/" exact>
                <Home></Home>
              </Route>
              <Route path="/login" exact>
                <Login></Login>
              </Route>
              <Route path="/signup">
                <SignUp></SignUp>
              </Route>

              <ProtectedRoute path="/contacts" exact component={Contact} />
              <ProtectedRoute path="/user" exact component={UserProfile} />
              <ProtectedRoute path="/detail/:id" exact component={DetailPage} />

              <Route component={NotFound} />
            
            </Switch>
        </PersistGate>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
