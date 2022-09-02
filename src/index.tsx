import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { FirebaseAppProvider } from 'reactfire';
import { Home, Contact, About, CarInventory, Login, Register } from './components';
import './style.css';
import { firebaseConfig } from './firebaseConfig';
import 'firebase/auth';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const temp_props = "Car Inventory"

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback={<>loading ...</>}>
      <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense={true}>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path='/'>
                <Home title={temp_props}/>
              </Route>
              <Route path='/carinventory'>
                <CarInventory></CarInventory>
              </Route>
              <Route path='/about'>
                <About></About>
              </Route>
              <Route path='/contact'>
                <Contact></Contact>
              </Route>
              <Route path='/login' component={Login}>
                <Login></Login>
              </Route>
              <Route path='/register' component={Register}>
                <Register></Register>
              </Route>
            </Switch>
          </Router>
        </Provider>
      </FirebaseAppProvider>
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
