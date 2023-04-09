import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import NavigationStack from "./src/navigation/NavigationStack";
import { useFonts } from "expo-font";

let customFonts = {
  LondrinaSolid: require("./assets/fonts/LondrinaSolid.ttf"),
  "MergeOne-Regular": require("./assets/fonts/MergeOne-Regular.ttf"),
};

export default function App() {
  const [isLoaded] = useFonts(customFonts);
  if (!isLoaded) {
    return <Text>Loading</Text>;
  }
  return (
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  );
}
