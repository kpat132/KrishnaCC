import React,{Component} from 'react';

export default class LoginForm extends Component {
  
    render() {
      return (
        
            <div className="loginWrapper">
                <h2 className='formHeader'>Welcome back!</h2>
                <p>Sign in and get to it.</p>

                <form className="formWrapper">
                    <div className="email">
                        <div className = "input-label">
                            <p className='titleLabel'>Email</p>
                        </div>
                        <input className="input" type="Text" name="email" placeholder="Email Address" autoComplete="on" id="loginField-email" />
                    </div>
                    <div className="password">
                        <div className = "input-label">
                            <p className='titleLabel'>Password</p>
                        </div>
                        <input className="input" type="Text" name="password" placeholder="Password" autoComplete="on" id="loginField-pass" />

                    </div>
                    <div className="resetPassword">
                        <a className='resetLink'>Forgot your Password?</a>
                    </div>

                  <button className="submitButton" disabled="" id="login-button__submit" type="submit">
                    <div className="buttontext-container ">
                        <p className="button-text ">
                            Sign In
                        </p>
                    </div>
                </button>

                </form>
                <div className='createAccount-wrapper'>
                    <a className="createAccountLink">Don't have an account? Create one now!</a>
                </div>

            </div>
          
      );
    }
  }