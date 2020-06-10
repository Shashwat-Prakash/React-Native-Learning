import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";

function NativeButton(props) {
  const [value, setValue] = useState("");

  return (
    <View>
      <Button title={props.name} color={props.color}></Button>
    </View>
  );
}

export default NativeButton;

const styles = StyleSheet.create({
  login: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    height: 40,
    paddingLeft: 30,
    borderWidth: 1,
    color: "green",
    borderRadius: 40,
  },
});
