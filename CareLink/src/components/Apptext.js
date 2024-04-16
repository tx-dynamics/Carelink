import React from "react";
import { Text } from "react-native";
import DefaultStyles from "../config/Styles";

function Apptext({ numberOfLines, children, style, ...otherprops }) {
  return (
    <Text numberOfLines={numberOfLines} style={[DefaultStyles.text, style]} {...otherprops}>
      {children}
    </Text>
  );
}

export default Apptext;
