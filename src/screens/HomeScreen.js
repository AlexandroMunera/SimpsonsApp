import { useEffect, useState } from "react";
import {
  Text,
  StyleSheet,
  Image,
  View,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { getQuotesByCharacter, getSimpsonsApi } from "../api/simpsonsAPI";

export default function HomeScreen({ navigation }) {
  const [text, onChangeText] = useState("");
  const [data, setData] = useState({});

  const getQuotes = () => {
    getSimpsonsApi()
      .then((response) => {
        setData(response[0]);
      })
      .catch(() => {
        navigation.navigate("Error");
      });
  };

  const getQuotesByText = () => {
    getQuotesByCharacter(text)
      .then((response) => {
        setData(response[0]);
      })
      .catch(() => {
        navigation.navigate("Error");
      });
  };

  useEffect(() => {
    getQuotes();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: "100%" }}>
        <View style={styles.header}>
          <Image style={styles.logo} source={require("../assets/logo.png")} />
          <Image style={styles.icon} source={require("../assets/menu.png")} />
        </View>

        <View style={styles.search}>
          <Text style={styles.searchText}>Discover some Simpsons quotes</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            onEndEditing={getQuotesByText}
            value={text}
            placeholder="Search"
          />
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.quoteContainer}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.quoteText}> {data.quote} </Text>
          </ScrollView>
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
    width: 125,
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
    fontFamily: "LondrinaSolid",
    fontSize: 22,
    color: "white",
    marginLeft: 10,
    textAlign: "center",
  },
  input: {
    height: 40,
    padding: 5,
    paddingLeft: 15,
    marginTop: 10,
    backgroundColor: "white",
    color: "#898989",
    borderRadius: 10,
    marginTop: 25,
    fontFamily: "MergeOne-Regular",
    fontSize: 18,
  },
  card: {
    minHeight: 350,
    backgroundColor: "#FFDE00",
    marginHorizontal: 30,
    padding: 30,
    paddingBottom: 20,
    borderRadius: 10,
    alignItems: "center",
    width: "100%",
  },
  quoteContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 20,
    paddingRight: 0,
    borderRadius: 10,
    width: "100%",
    overflow: "hidden",
  },
  quoteText: {
    fontSize: 18,
    width: "80%",
    fontFamily: "MergeOne-Regular",
  },
  characterImage: {
    width: 100,
    height: 150,
    alignSelf: "flex-end",
  },
  quoteAuthor: {
    color: "black",
    fontSize: 22,
    marginTop: 10,
    fontFamily: "LondrinaSolid",
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
    fontFamily: "MergeOne-Regular",
  },
});
