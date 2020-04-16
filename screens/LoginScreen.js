import React, { Component } from 'react';
import { Text, View, Button, Alert } from 'react-native';
import { LoginButton, CardSection, Input, Spinner } from '../components/basic';

import firebase from '../firebase/firebase.utils';
import '@firebase/auth';
import '@firebase/firestore';

const auth = firebase.auth();

class LoginScreen extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
    user: null,
    loggedIn: false,
  };

  unsubscribeFromAuth = null;

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    auth
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onAccountCreated.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginFail() {
    this.setState({
      error: 'Authentification Failed',
      loading: false,
    });
  }

  onLoginSuccess() {
    const currentUser = firebase.auth().currentUser;

    this.setState({
      email: '',
      password: '',
      loading: false,
      error: '',
      user: currentUser,
      loggedIn: true,
    });
  }

  onAccountCreated() {
    const currentUser = firebase.auth().currentUser;
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: '',
      user: currentUser,
      loggedIn: true,
    });

    this.successAlert();
  }

  successAlert = () =>
    Alert.alert(
      'Success!',
      'Account successfully created',
      [
        {
          text: 'OK',
          onPress: () => console.log('success'),
          style: 'cancel',
        },
      ],
      { cancelable: false }
    );

  UNSAFE_componentWillMount() {
    const currentUser = firebase.auth().currentUser;
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true, user: currentUser });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  onLogout() {
    this.setState({ user: null });
    auth.signOut();
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.user ? (
          <View style={{ flex: 1 }}>
            <View style={styles.logoutContainer}>
              <Text style={styles.user}>{this.state.user.email}</Text>
              <Text style={styles.sections}>PURCHASES</Text>
              <Text style={styles.sections}>MY INFORMATION</Text>
              <Text style={styles.sections}>HELP</Text>
              <Text style={styles.sections}>SETTINGS</Text>
              <Text style={styles.sections}>CONTACT</Text>
            </View>
            <View style={styles.button}>
              <Button
                title='Log Out'
                color='white'
                onPress={this.onLogout.bind(this)}
              />
            </View>
          </View>
        ) : (
          <View style={styles.login}>
            <Text style={styles.text}>Log in with your email address</Text>
            <CardSection>
              <Input
                placeholder='user@gmail.com'
                label='Email'
                defaultValue={this.state.email}
                onChangeText={(email) => this.setState({ email })}
              />
            </CardSection>
            <CardSection>
              <Input
                placeholder='password'
                label='Password'
                value={this.state.password}
                labelStyle={{ color: 'white' }}
                onChangeText={(password) => this.setState({ password })}
                secureTextEntry
              />
            </CardSection>

            <Text style={styles.errorTextStyle}>{this.state.error}</Text>

            <CardSection>
              {this.state.loading ? (
                <Spinner size='small' />
              ) : (
                <LoginButton onPress={this.onButtonPress.bind(this)}>
                  LOG IN
                </LoginButton>
              )}
            </CardSection>
          </View>
        )}
      </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgb(28, 28, 29)',
    paddingBottom: 100,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  login: {
    marginTop: 50,
    backgroundColor: 'rgb(28, 28, 29)',
  },
  logoutContainer: {
    marginTop: 50,
    paddingLeft: 30,
    alignItems: 'flex-start',
  },
  user: {
    fontSize: 19,
    color: 'white',
    fontFamily: 'cantarell-regular',
    marginBottom: 25,
  },
  sections: {
    fontSize: 29,
    color: 'white',
    fontFamily: 'cantarell-bold',
  },
  text: {
    fontFamily: 'cantarell-regular',
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
    marginBottom: 10,
  },
  button: {
    paddingVertical: 100,
    alignSelf: 'flex-start',
    paddingLeft: 30,
  },
};

export default LoginScreen;
