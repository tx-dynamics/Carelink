import { Dimensions, Platform } from "react-native";
import colors from "./colors";

export default {
  colors,
  width: Dimensions.get("screen").width,
  height: Dimensions.get("screen").height,

  text: {
    color: colors.textColor,
    fontSize: 15,
    fontFamily: "Poppins-Regular",
    fontWeight: "400"
  },
  lightTxt: {
    color: colors.black,
    fontSize: 13,
    fontFamily: "Poppins-Regular",
  },
};
