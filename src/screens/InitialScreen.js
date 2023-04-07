import {
  View,
  StyleSheet,
  ImageBackground,
  Pressable,
  Image,
} from "react-native";

export default function InitialScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/initialImage.png")}
        resizeMode="contain"
        style={styles.bgImage}
      >
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("../assets/logo.png")} />
        </View>
        <View style={styles.iconsContainer}>
          <Pressable onPress={() => {}}>
            <Image
              style={styles.icon}
              source={require("../assets/soundIcon.png")}
            />
          </Pressable>
          <Pressable
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Image
              style={styles.icon}
              resizeMode="contain"
              source={require("../assets/enter.png")}
            />
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
    backgroundColor: "#01AED9",
  },
  logoContainer: {
    width: "100%",
    alignItems: "center",
  },
  logo: {
    width: "70%",
    top: 100,
  },
  bgImage: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  iconsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    height: 40,
    width: 50,
    margin: 30,
  },
});
