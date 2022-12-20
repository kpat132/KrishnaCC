import React,{Component} from 'react';

export default class LoginForm extends Component {

    isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
      }
    handleSubmit = (event) => {
        //hit API endpoint /login

        event.preventDefault();

        //Email Validation
        if (!(/\S+@\S+\.\S+/.test(event.target.email.value))) {
            console.log('Email is invalid');
          } else {
            console.log("Email: ",event.target.email.value)
            console.log("Password: ",event.target.password.value)
          }
        
      }
    
    render() {
      return (
        
            <div className="loginWrapper">
                <h2 className='formHeader'>Welcome back!</h2>
                <p>Sign in and get to it.</p>

                <form onSubmit={this.handleSubmit} className="formWrapper">
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

                  <button className="submitButton" id="login-button__submit" type="submit">
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