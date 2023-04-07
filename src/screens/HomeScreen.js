import { useEffect } from "react";
import { Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { getSimpsonsApi } from "../api/simpsonsAPI";

export default function HomeScreen({ navigation }) {
  useEffect(() => {
    getSimpsonsApi()
      .then((response) => {
        console.log("response", response);
      })
      .catch((error) => {
        console.error(error);
        navigation.navigate("Error");
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
      <Text>HomeScreen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#01AED9",
  },
});
