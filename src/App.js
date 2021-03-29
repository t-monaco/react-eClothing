import React from 'react';
import { Route, Switch } from 'react-router';

import './App.css';

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignOut from './pages/sing-in-sign-out/sing-in-sign-out.component';


function App() {
  return (
    <div >
        <Header />
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/signin' component={SignInAndSignOut} />
        </Switch>
    </div>
  );
}

export default App;
