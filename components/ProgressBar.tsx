import React from "react";
import { View, StyleSheet } from "react-native";  

const ProgressBar = ({ progress, color }: { progress: number, color: string }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.fill, { width: `${progress}%`, backgroundColor: color }]} />
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
  },
});

export default ProgressBar;
