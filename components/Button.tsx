import { StyleProp, StyleSheet, ViewStyle, Pressable, Dimensions } from "react-native";
import React from "react";
import Typo from "./Typo";
import Loading from "./Loading";
import { LinearGradient } from "expo-linear-gradient";

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
      style={({ pressed }) => [
        { opacity: pressed ? 0.85 : 1 }, 
        style,
      ]}
    >
      <LinearGradient
        colors={["#5f33e1", "#7b4bff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.button}
      >
        {loading ? (
          <Loading />
        ) : (
          <Typo size={16} fontWeight="700" color="#fff">
            {children}
          </Typo>
        )}
      </LinearGradient>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    height: 56,
    width: width * 0.9,
    paddingHorizontal: width * 0.1,
    borderRadius: 15, 
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
