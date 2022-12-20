import React,{Component} from 'react';
import LoginForm from './loginForm'

export default class MainPage extends Component {
  
    render() {
      return (
        <div>
            <div className='test'></div>
            <main id="page-login" className='login_container'>
          <LoginForm />
          <footer id="footer-wrapper" className="footer">
            <p class="footer-text">
                © 2022 Rock Paper Coin
            </p>
        </footer>
            </main>
        </div>
      );
    }
  }