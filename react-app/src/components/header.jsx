import React,{Component} from 'react';

export const Header = () => {
  
      return (
        <div className='headerRoot'>
            <header className='headerContainer'>

            <a className="logoContainer">
            <div className = "imgContainer">
                <span className = "headerSpan">
                    <img className="logoImg" src = "https://app.rockpapercoin.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo2.a8275e48.jpg&w=2048&q=75">
                    </img>
                </span>
            </div>
            </a>

            <div className="buttonWrapper">
                <button className="signUpButton">
                    <div className = "buttonContentContainer">
                        <p className= "buttonText">Sign Up</p>
                    </div>
                </button>
            </div>
            </header>
        </div>
      );
    }
