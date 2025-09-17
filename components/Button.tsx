import {
  StyleProp,
  StyleSheet,
  ViewStyle,
  Pressable,
  Dimensions,
} from "react-native";
import React from "react";
import Typo from "./Typo";
import Loading from "./Loading";

interface ButtonProps {
  style?: StyleProp<ViewStyle>;
  onPress: () => void;
  loading?: boolean;
  children: React.ReactNode;
}

const { width } = Dimensions.get("window");

const Button = ({ style, onPress, loading = false, children }: ButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={loading}
      style={[styles.button, style]}
    >
        {loading ? (
          <Loading />
        ) : (
          <Typo size={16} fontFamily="LexendDeca_700Bold" color="#fff">
            {children}
          </Typo>
        )}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    height: 56,
    paddingHorizontal: width * 0.1,
    borderRadius: 20,
    borderCurve: "continuous",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3,
  },
});
