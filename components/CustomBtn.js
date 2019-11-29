import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../constants/colors";

const CustomBtn = props => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={props.onPress}>
      <View style={{ ...styles.btn, ...props.style }}>
        <Text style={{ ...styles.btnText, ...props.style }}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25
  },
  btnText: {
    fontSize: 18,
    fontFamily: "open-sans-bold",
    color: "white"
  }
});

export default CustomBtn;
