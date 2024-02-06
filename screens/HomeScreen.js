import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";
import { removeItem } from "../utils/asyncStorage";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const handleReset = async () => {
  const navigation = useNavigation();

  await removeItem("onboarded");
  navigation.push("Onboarding");
};

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LottieView
        style={styles.lottie}
        source={require("../assets/animations/confetti.json")}
        autoPlay
        loop
      />
      <Text style={styles.text}>Home Page</Text>
      <TouchableOpacity onPress={handleReset} style={styles.resetButton}>
        <Text>Reset</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  lottie: {
    width: width * 0.9,
    height: width,
  },
  text: {
    fontSize: width * 0.09,
    marginBottom: 20,
  },
  resetButton: {
    backgroundColor: "#34d399",
    padding: 10,
    borderRadius: 10,
  },
});
