import React from 'react';
import FacebookLogin from 'react-facebook-login';

function Login() {

  const responseFacebook = (response) => {
    console.log(response);
  }

//   window.FB.getLoginStatus(function(response) {
//     statusChangeCallback(response);
// });

  return (
    <div className="Login">
      <header className="Login--header">
        <p>LOGIN</p>
      </header>
      <FacebookLogin 
        appId="2851709378235915" 
        fields="name,email,picture"
        icon="fa-facebook" 
        callback={responseFacebook} />
    </div>
  );
}

export default Login;