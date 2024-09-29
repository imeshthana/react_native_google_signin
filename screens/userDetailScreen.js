import { StyleSheet, View, Text, Image } from 'react-native';

export default function UserDetailsScreen({ route }) {
    const { userInfo } = route.params;
  
    return (
      <View style={styles.container}>
        {userInfo.picture && (
            <Image
            source={{ uri: userInfo.picture }}
            style={styles.profileImage}
            />
        )}
        <Text>Name: {userInfo.name}</Text>
        <Text>Email: {userInfo.email}</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
      },
  });