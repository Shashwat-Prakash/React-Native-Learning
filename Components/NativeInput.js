import React, { Component } from "react";
import { TextInput, View, StyleSheet } from "react-native";

export default class NativeInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(text) {
    this.setState({
      value: text,
    });
  }
  render() {
    return (
      <View>
        <TextInput
          style={styles.authStyle}
          textContentType={this.props.type}
          secureTextEntry={this.props.secureEntry}
          value={this.state.value}
          onChangeText={(text) => this.handleChange(text)}
          placeholder={this.props.placeholderValue}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  authStyle: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    height: 40,
    paddingLeft: 30,
    borderWidth: 1,
    borderColor: "green",
    borderRadius: 40,
  },
});
