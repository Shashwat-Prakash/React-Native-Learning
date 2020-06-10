import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import NativeText from "./Components/Nativetext";
import NativeInput from "./Components/NativeInput";
import NativeButton from "./Components/NativeButton";

export default function App() {
  return (
    <ScrollView>
      <View>
        <NativeText title="Welcome to React Native basics!" />
      </View>
      <View>
        <NativeInput
          placeholderValue="Enter Your Username"
          type="emailAddress"
          secureEntry={false}
        />
        <NativeInput
          placeholderValue="Enter Your Password"
          type="password"
          secureEntry={true}
        />
      </View>
      <View style={styles.container}>
        <NativeButton name="Login" color="green" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 150,
    marginRight: 20,
    height: 40,
    width: 100,
    paddingLeft: 0,
    borderRadius: 60,
  },
  heading: {
    color: "skyblue",
    fontSize: 50,
    fontWeight: "bold",
    borderBottomColor: "black",
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    marginLeft: 100,
  },
});
