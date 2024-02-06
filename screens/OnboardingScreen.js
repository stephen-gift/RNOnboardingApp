import { Dimensions, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

import Onboarding from "react-native-onboarding-swiper";

const { width, height } = Dimensions.get("window");

const OnboardingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Onboarding
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            backgroundColor: "#a7f3d0",
            image: (
              <View>
                <Text>Onboarding</Text>
              </View>
            ),
            title: "Boost Productivity",
            subtitle: "Subscribe this channel to boost your productivity level",
          },
          {
            backgroundColor: "#fef3c7",
            image: (
              <View>
                <Text>Onboarding</Text>
              </View>
            ),
            title: "Work Seamlessly",
            subtitle: "Get your work done seamlessly without interruption",
          },
          {
            backgroundColor: "#a78bfa",
            image: (
              <View>
                <Text>Onboarding</Text>
              </View>
            ),
            title: "Achieve Higher Goals",
            subtitle:
              "By boosting your productivity we help you to achieve higher goals",
          },
        ]}
      />
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
