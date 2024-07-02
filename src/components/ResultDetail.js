import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

function ResultDetail({ result }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.text}>{result.name}</Text>
      <Text style={styles.text}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 220,
    height: 150,
    borderRadius: 4,
  },
  text: {
    fontWeight: "bold",
  },
});

export default ResultDetail;
