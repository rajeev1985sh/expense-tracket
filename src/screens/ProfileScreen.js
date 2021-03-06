import React, { Component } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { connect } from 'react-redux'
import Firebase from '../config/FirebaseConfig';

class ProfileScreen extends Component{

    logOut = () => {
        Firebase.auth().signOut().then(() => {
            this.props.navigation.navigate('LoginScreen')            
        }).catch(error => console.log(error));
    }

    render(){
        return(
           <View style={styles.container}>             
                  <Text>Profile Screen</Text>
                  <Text>{ this.props.user.email }</Text>
                  <Button
                    color="#3740FE"
                    title="Logout"
                    onPress={() => this.logOut()}
                  />                  
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
});

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(ProfileScreen);