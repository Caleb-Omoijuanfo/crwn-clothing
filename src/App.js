import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/home/homePage';
import ShopPage from './pages/shop/shopPage';
import Header from './components/header/header';
import SignInandSignUpPage from './pages/signInandSignUp/signInandSignUp';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage}/> 
        <Route path="/shop" component={ShopPage} />  
        <Route path="/signIn" component={SignInandSignUpPage} />            
      </Switch>      
    </div>
  );
}

export default App;
