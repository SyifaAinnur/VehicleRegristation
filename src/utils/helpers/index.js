import { Dimensions } from "react-native";

// screenwidth and screenheight
export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

export const truncateString = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  };
  