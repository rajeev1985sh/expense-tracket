import React, { Component } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Button, ToastAndroid } from 'react-native';
import Firebase from '../config/FirebaseConfig';

class LoginScreen extends Component{

    state ={
        email: '',
        password: '',
    }

    handleLogin = () => {
        const { email, password } = this.state
        ToastAndroid.show('Login click', ToastAndroid.SHORT);
        Firebase.auth()
             .signInWithEmailAndPassword( email, password)
             .then(() => this.props.navigation.navigate('Profile'))
             .catch(error => console.log(error))
    }

    render(){
        return(
           <View style={styles.container}>
              <TextInput
                 style={styles.inputBox}
                 value={this.state.email}
                 onChangeText={email => this.setState({ email })}
                 placeholder = 'Email'
                 autoCapitalize = 'none'
              />
              <TextInput
                  style={styles.inputBox}
                  value= {this.state.password}
                  onChangeText={password => this.setState({ password })}
                  placeholder = 'Password'
                  secureTextEntry={true}
              />  
              <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                  <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>    
              <Button title="Don't have an account yet? Sign up" onPress={() => this.props.navigation.navigate('SignupScreen')} />
           </View>       
        ); 
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputBox:{
        width: '85%',
        margin: 10,
        padding: 15,
        fontSize: 16,
        borderColor: '#d3d3d3',
        borderBottomWidth: 1,
        textAlign: 'center'
    },
    button: {
        marginTop: 30,
        marginBottom: 20,
        paddingVertical: 5,
        alignItems: 'center',
        backgroundColor: '#F6820D',
        borderColor: '#F6820D',
        borderWidth: 1,
        borderRadius: 5,
        width: 200
    },
    buttonText:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    buttonSignUp: {
        fontSize: 12
    }
})

export default LoginScreen;