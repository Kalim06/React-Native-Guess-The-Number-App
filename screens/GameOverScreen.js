import React from "react";
import { View, StyleSheet, Button, Image, Text } from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import colors from "../constants/colors";
import CustomBtn from "../components/CustomBtn";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require("../assets/success.png")} />
      </View>
      <View style={styles.textContainer}>
        <BodyText style={styles.text}>
          Your phone took <Text style={styles.highligtedText}>{props.roundsNumber}</Text> round to
          guess the number <Text style={styles.highligtedText}>{props.userNumber}</Text>.
        </BodyText>
      </View>
      <CustomBtn onPress={props.onRestart}>NEW GAME</CustomBtn>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderWidth: 3,
    borderColor: "black",
    borderRadius: 150,
    overflow: "hidden",
    marginVertical: 15
  },
  image: {
    width: "100%",
    height: "100%"
  },
  textContainer: {
    marginVertical: 15,
    marginHorizontal: 30
  },
  text: {
    fontSize: 20,
    textAlign: "center"
  },
  highligtedText: {
    color: colors.primary,
    fontFamily: "open-sans-bold"
  }
});

export default GameOverScreen;
