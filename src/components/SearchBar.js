import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import Feather from "@expo/vector-icons/Feather";

function SearchBar({ term, onTermChange, onTermSubmit }) {
  return (
    <View style={styles.backgroundStyle}>
      <Feather
        style={styles.iconeStayle}
        name="search"
        size={30}
        color="black"
      />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        value={term}
        placeholder="Search"
        onChangeText={(val) => onTermChange(val)}
        onEndEditing={() => onTermSubmit()}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    marginBottom: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconeStayle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;
