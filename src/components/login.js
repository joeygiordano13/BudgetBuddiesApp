import React, { useState } from 'react';
import { buildPath } from '../functions/buildPath'
import { Text, StyleSheet, View, Button } from 'react-native';

function Login()
{
    var loginEmail;
    var loginPassword;

    var message = '';
    const [ showAlert, setAlert ] = useState(false);

    const doLogin = async event =>
    {
        event.preventDefault();

        var obj = {email:loginEmail.value,password:loginPassword.value};
        var js = JSON.stringify(obj);
        try
        {
            // API call
            const response = await fetch(buildPath('api/login'),
                {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});

            // Parse JSON response
            var res = JSON.parse(await response.text());

            if( res.error != '')
            {
                message = 'Email/Password combination incorrect';
                setAlert(true);
            }
            else
            {
                localStorage.setItem('email', loginEmail.value);
                localStorage.setItem('userID', res.id);
            }
        }
        catch(e)
        {
            alert(e.toString());
            return;
        }
    };

    return(
      <View style={styles.container}>
        <TextInput
          placeholder="Email"
          onChangeText={loginEmail => setText(loginEmail)}
          defaultValue={loginEmail} 
        />
        <TextInput
          placeholder="Password"
          onChangeText={loginPassword => setText(loginPassword)}
          defaultValue={loginPassword} 
        />
        <Button name="Submit" onClick={doLogin}/>
      </View>
)};


const styles = StyleSheet.create({
  container: {
      flex: 1, 
      alignItems: 'left',
      justifyContent: 'center',
      padding: 20,
  },
  extras: {
      flex: 1, 
      alignItems: 'right',
      padding: 10,
  }
});

export default Login;