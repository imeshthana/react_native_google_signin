import { StyleSheet, View, Text, Button } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import React, { useEffect } from 'react';

export default function Home({ navigation }) {  
    const [request, response, promptAsync] = Google.useAuthRequest({
      androidClientId: 'YOUR_CLIENT_ID'
    });
  
    useEffect(() => {
      if (response?.type === 'success') {
        const { authentication } = response;
        if (authentication?.accessToken) {
          fetchUserInfo(authentication.accessToken);
        }
      }
    }, [response]);
  
    const fetchUserInfo = async (token) => {
      try {
        const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const user = await response.json();
        console.log(user)
        navigation.navigate('UserDetails', { userInfo: user });
      } catch (error) {
        console.log('Error fetching user info:', error);
      }
    };
  
    return (
      <View style={styles.container}>
        <Button
          title="Sign in with Google"
          disabled={!request}
          onPress={() => promptAsync()}
          style={styles.button}
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      color: "#3366FF",
    },
  });