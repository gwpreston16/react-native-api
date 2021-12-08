import * as React from "react";
import { StyleSheet } from "react-native";
import { Text, View, Button } from "native-base";

function HomeScreen({ navigation }) {

  let onPress = () => {
    navigation.navigate('OtherScreen')
  }
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button onPress={onPress}>Go to second screen</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default HomeScreen;