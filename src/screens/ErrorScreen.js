import { ImageBackground, StyleSheet, Text, View } from "react-native";

export default function ErrorScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/error.png")}
        resizeMode="contain"
        style={styles.bgImage}
      >
        <Text style={styles.text404}>404</Text>
        <View style={styles.textContainer}>
          <Text style={styles.errorTitle}>D'OH</Text>
          <Text style={styles.errorText}>
            we couldn't find the page you're looking for
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe20a",
  },
  bgImage: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },

  text404: {
    fontSize: 130,
    color: "#000000",
    textAlign: "center",
    marginTop: 90,
    fontFamily: "LondrinaShadow-Regular",
  },
  textContainer: {
    width: "80%",
    marginBottom: 80,
  },
  errorTitle: {
    fontSize: 40,
    fontFamily: "LondrinaSolid",

    color: "#000000",
    textAlign: "center",
  },
  errorText: {
    fontSize: 30,
    color: "#000000",
    textAlign: "center",
    fontFamily: "LondrinaSolid",
  },
});
