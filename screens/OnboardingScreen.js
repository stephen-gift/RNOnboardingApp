import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { storeData } from "../utils/asyncStorage";

const { width, height } = Dimensions.get("window");

const OnboardingScreen = () => {
  const navigation = useNavigation();

  const handleDone = () => {
    navigation.navigate("Home");
    storeData("onboarded", "1");
  };

  const doneButton = ({ ...props }) => {
    return (
      <TouchableOpacity style={styles.doneButton} {...props}>
        <Text>Done</Text>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        DoneButtonComponent={doneButton}
        containerStyles={{ paddingHorizontal: 15 }}
        pages={[
          {
            backgroundColor: "#a7f3d0",
            image: (
              <LottieView
                style={styles.lottie}
                source={require("../assets/animations/boost.json")}
                autoPlay
                loop
              />
            ),
            title: "Boost Productivity",
            subtitle: "Subscribe this channel to boost your productivity level",
          },
          {
            backgroundColor: "#fef3c7",
            image: (
              <LottieView
                style={styles.lottie}
                source={require("../assets/animations/work.json")}
                autoPlay
                loop
              />
            ),
            title: "Work Seamlessly",
            subtitle: "Get your work done seamlessly without interruption",
          },
          {
            backgroundColor: "#a78bfa",
            image: (
              <LottieView
                style={styles.lottie}
                source={require("../assets/animations/achieve.json")}
                autoPlay
                loop
              />
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
