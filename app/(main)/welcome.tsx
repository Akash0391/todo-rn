import { Dimensions, Image, StyleSheet, View } from "react-native";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import Button from "@/components/Button";
import { useState } from "react";
import { ArrowRight } from "lucide-react-native";

const { width, height } = Dimensions.get("window");

export default function Index() {
  const [loading, setLoading] = useState(false);
  const handleStart = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* Boy Illustration */}
        <Image
          source={require("@/assets/images/boy2.png")}
          style={styles.image}
          resizeMode="contain"
        />

        {/* Title */}
        <Typo size={40} fontWeight="bold" style={styles.title}>
          Task Management & {"\n"} To-Do List
        </Typo>

        {/* Subtitle */}
        <Typo size={25} style={styles.subtitle}>
          This productive tool is designed to help{"\n"}
          you better manage your task{"\n"} project-wise conveniently!
        </Typo>

        {/* Button */}
        <Button
          onPress={() => {
            handleStart();
          }}
          loading={loading}   
          style={{    
            width: "100%",    
            marginBottom: 20, 
          }}
        >
          <View style={styles.buttonContent}>
            {/* Empty spacer left */}
            <View style={{ flex: 1 }} />

            {/* Centered text */}
            <Typo size={24} fontWeight="700" color={"#fff"} >
              Let’s Start
            </Typo>

            {/* Arrow on right */}
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <ArrowRight size={24} color="#fff" strokeWidth={2} />
            </View>
          </View>
        </Button>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 15,
  },
  image: {
    width: width * 0.9,
    height: height * 0.45,
    marginBottom: 70,
    marginTop: 0,
  },
  title: {
    textAlign: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  subtitle: {
    textAlign: "center",
    color: "#666",
    marginTop: 15,
    marginBottom: 70,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    width: "100%",
  },
});
