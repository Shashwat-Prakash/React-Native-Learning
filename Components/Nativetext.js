import React from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";

export default function NativeText(props) {
  return (
    <ScrollView>
      <View>
        <Text style={styles.header}>{props.title}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "orange",
    paddingTop: 75,
    paddingLeft: 20,
    fontWeight: "bold",
    borderWidth: 2,
    height: 150,
    fontSize: 30,
  },
});
