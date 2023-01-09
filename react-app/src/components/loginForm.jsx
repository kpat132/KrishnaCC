import React, { Component } from 'react';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default class LoginForm extends Component {

    async getLoginData(e) {
        try {
            let res = await axios.get(`/login`, {
                params: { email: e.email.value, pass: e.password.value }
            });
            return res
        }
        catch (err) {
            console.log(err);
        }
    }
    handleSubmit = async (event) => {
        //hit API endpoint /login
        try {
            event.preventDefault();
            let response = await this.getLoginData(event.target);
            response = response.data;
            if (Object.keys(response.data).length > 0) {
                toast.success("Login Successful!", {
                    position: toast.POSITION.TOP_CENTER
                });
            }else{
                toast.error("Invalid Email Format", {
                    position: toast.POSITION.TOP_CENTER
                });
            }

        } catch (err) {
            console.log("Error: ", err);
            return err;
        }

    }

    render() {
        return (

            <div className="loginWrapper">
                <h2 className='formHeader'>Welcome back!</h2>
                <p>Sign in and get to it.</p>

                <form onSubmit={this.handleSubmit} className="formWrapper">
                    <div className="email">
                        <div className="input-label">
                            <p className='titleLabel'>Email</p>
                        </div>
                        <input className="input" type="Text" name="email" placeholder="Email Address" autoComplete="on" id="loginField-email" />
                    </div>
                    <div className="password">
                        <div className="input-label">
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
                <ToastContainer />
            </div>

        );
    }
}