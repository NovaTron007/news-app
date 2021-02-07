import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; // use material icons in native expo

const Card = () => {
  return (
    <View style={styles.card}>
      <View style={styles.imageWrapper}>
        <Image
          // for local: source={require("../../assets/news.jpg")} style={styles.image}
          source={{ uri: "https://limousineuara.com/wp-content/uploads/2018/01/news-limousine-uara.jpg" }}
          style={styles.image}
        />
      </View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>Title</Text>
        <MaterialIcons name="favorite-border" size={24} color="#72bcd4" />
      </View>
      <View style={styles.descWrapper}>
        <Text style={styles.desc}>This is a new description</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    height: 300,
    margin: 20,
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5
  },
  imageWrapper: {
    width: "100%",
    height: "60%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: "hidden"
  },
  titleWrapper: {
    height: "10%",
    paddingHorizontal: 15, // left & right
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginTop:10
  },
  descWrapper: {
    paddingHorizontal: 15 // left & right
  },
  image: {
    height: "100%",
    width: "100%"
  },
  title: {
    fontFamily: "Nunito-Bold",
    fontSize: 20,
  },
  desc: {
    fontFamily: "Nunito-Regular",
    fontSize: 15,
    marginTop: 10
  }
});
export default Card;
