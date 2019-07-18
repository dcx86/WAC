import React, { useState, useEffect } from 'react';
import FacebookLogin from 'react-facebook-login';
import { postUsers, callUsers } from './db-connection-functions.js'

function Login({ setIsLogin }) {
  const [login, setLogin] = useState();


  useEffect(() => {
    if (login) {
      postUsers(login);
    }
  }, [login])

  const responseFacebook = ({ id, name, email, accessToken }) => {
    setLogin({ id, name, email, accessToken });
    setIsLogin({id});
  }

  //   window.FB.getLoginStatus(function(response) {
  //     statusChangeCallback(response);
  // });

  return (
    <div className="Login">
      <header className="Login--header">
        <p>LOGIN</p>
      </header>
      {!login && <FacebookLogin
        appId="2851709378235915"
        fields="name,email,picture"
        icon="fa-facebook"
        callback={responseFacebook} />}
    </div>
  );
}

export default Login;