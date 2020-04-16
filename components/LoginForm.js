import React, { Component } from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { LoginButton, Card, CardSection, Input, Spinner } from './basic';

import firebase from 'firebase';
import { setCurrentUser } from '../redux/user/user-actions';
import { createUserProfileDocument } from '../firebase/firebase.utils';

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
  };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
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
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: '',
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size='small' />;
    }
    return (
      <LoginButton onPress={this.onButtonPress.bind(this)}>Log in</LoginButton>
    );
  }

  UNSAFE_componentWillMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  render() {
    return (
      <View>
        <Card>
          <CardSection>
            <Input
              placeholder='user@gmail.com'
              label='Email'
              value={this.state.email}
              onChangeText={(email) => this.setState({ email })}
            />
          </CardSection>

          <CardSection>
            <Input
              placeholder='password'
              label='Password'
              value={this.state.password}
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
                Log in
              </LoginButton>
            )}
          </CardSection>
        </Card>
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
};

export default LoginForm;
