import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (value) => {
  try {
    await AsyncStorage.setItem("my-key", value);
  } catch (error) {
    console.error("Error Storing Value: ", error);
  }

  console.log("Done 1.");
};

export const getData = async () => {
  try {
    await AsyncStorage.getItem("my-key");
  } catch (error) {
    console.error("Error Storing Value: ", error);
  }

  console.log("Done 2.");
};

export const removeData = async () => {
  try {
    await AsyncStorage.removeItem("my-key");
  } catch (error) {
    console.error("Error Storing Value: ", error);
  }

  console.log("Done 3.");
};
