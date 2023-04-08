import { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  TextInput,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { getSimpsonsApi } from "../api/simpsonsAPI";

export default function HomeScreen({ navigation }) {
  const [text, onChangeText] = useState("");
  const [data, setData] = useState({});

  const getQuotes = () => {
    getSimpsonsApi()
      .then((response) => {
        setData(response[0]);
        navigation.navigate("Error");
      })
      .catch((error) => {
        console.log("error", error);
        navigation.navigate("Error");
      });
  };

  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.header}>
          <Image style={styles.logo} source={require("../assets/logo.png")} />
          <Image
            style={styles.icon}
            source={require("../assets/soundIcon.png")}
          />
        </View>

        <View style={styles.search}>
          <Text style={styles.searchText}>Discover some Simpsons quotes</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Search"
          />
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.quoteContainer}>
          <Text style={styles.quoteText}> {data.quote} </Text>
          <Image
            style={styles.characterImage}
            resizeMode="contain"
            source={{
              uri: data.image,
            }}
          />
        </View>
        <Text style={styles.quoteAuthor}>{data.character}</Text>
      </View>

      <Pressable style={styles.button} onPress={getQuotes}>
        <Text style={styles.buttonText}>Show me more</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#01AED9",
    padding: 30,
    paddingBottom: 100,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: 120,
    height: 70,
  },
  icon: {
    height: 30,
    width: 40,
  },
  search: {
    marginTop: 40,
  },
  searchText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginLeft: 10,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 5,
    paddingLeft: 15,
    marginTop: 10,
    backgroundColor: "white",
    color: "#898989",
    borderRadius: 10,
    marginTop: 20,
  },
  card: {
    minHeight: 350,
    backgroundColor: "#FFDE00",
    marginHorizontal: 30,
    padding: 30,
    paddingBottom: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  quoteContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    width: "100%",
    overflow: "hidden",
  },
  quoteText: {
    fontSize: 18,
    width: "70%",
  },
  characterImage: {
    width: 100,
    height: 150,
    alignSelf: "flex-end",
  },
  quoteAuthor: {
    color: "black",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 10,
  },
  button: {
    width: "60%",
    backgroundColor: "#FFDE00",
    color: "black",
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "black",
    alignItems: "center",
    padding: 10,
  },
  buttonText: {
    fontSize: 18,
  },
});
