import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/home/homePage';
import ShopPage from './pages/shop/shopPage';
import Header from './components/header/header';
import SignInandSignUpPage from './pages/signInandSignUp/signInandSignUp';
import { auth } from './firebase/utilities';


class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUserProfile: null
    }
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUserProfile: user
      })

      console.log(user);
    })
  }

  componentWillMount() {
    this.unSubscribeFromAuth = null;
  }

  render() {
    const { currentUserProfile } = this.state;
    return (
      <div>
        <Header currentUser={currentUserProfile}/>
        <Switch>
          <Route exact path="/" component={HomePage}/> 
          <Route path="/shop" component={ShopPage} />  
          <Route path="/signIn" component={SignInandSignUpPage} />            
        </Switch>      
      </div>
    );
  }  
}

export default App;
