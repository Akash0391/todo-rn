import React from "react";
import { View, StyleSheet } from "react-native";  

const ProgressBar = ({ progress }: { progress: number }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.fill, { width: `${progress}%` }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 10,
    borderRadius: 8,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  fill: {
    height: "100%",
    borderRadius: 8,
    backgroundColor: "#1E90FF", // Blue progress
  },
});

export default ProgressBar;
