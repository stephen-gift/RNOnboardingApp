import { Dimensions, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("window");

const OnboardingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>OnboardingScreen</Text>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  lottie: {
    width: width * 0.9,
    height: width,
  },
  doneButton: {
    padding: 20,
    // backgroundColor: 'white',
    // borderTopLeftRadius: '100%',
    // borderBottomLeftRadius: '100%'
  },
});
