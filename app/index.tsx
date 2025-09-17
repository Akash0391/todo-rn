import { Dimensions, Image, StyleSheet, View } from "react-native";
import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import Button from "@/components/Button";
import { useState } from "react";
import { ArrowRight } from "lucide-react-native";
import { router } from "expo-router";
import {
  useFonts,
  LexendDeca_400Regular,
  LexendDeca_500Medium,
  LexendDeca_700Bold,
  LexendDeca_600SemiBold,
} from "@expo-google-fonts/lexend-deca";

const { width, height } = Dimensions.get("window");

export default function Index() {
  const [loading, setLoading] = useState(false);

  let [fontsLoaded] = useFonts({
    LexendDeca_400Regular,
    LexendDeca_500Medium,
    LexendDeca_700Bold,
    LexendDeca_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleStart = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push("/home");
    }, 2000);
  };
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* Boy Illustration */}
        <Image
          source={require("@/assets/images/image.png")}
          style={styles.image}
          resizeMode="contain"
        />

        {/* Title */}
        <Typo
          size={38}
          fontFamily="LexendDeca_600SemiBold"
          style={styles.title}
        >
          Task Management & {"\n"} To-Do List
        </Typo>

        {/* Subtitle */}
        <Typo
          size={23}
          style={styles.subtitle}
          fontFamily="LexendDeca_400Regular"
        >
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
            width: width * 0.9,
            marginBottom: 20,
            backgroundColor: "#5f33e1",
          }}
        >
          <View style={styles.buttonContent}>
            {/* Empty spacer left */}
            <View style={{ flex: 1 }} />

            {/* Centered text */}
            <Typo size={24} fontFamily="LexendDeca_600SemiBold" color={"#fff"}>
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
  },
  image: {
    width: width * 0.7,
    height: height * 0.3,
    marginTop: 90,
    marginLeft: 40,
  },
  title: {
    textAlign: "center",
    marginBottom: 10,
    color: "#24252C",
    marginTop: 170,
  },
  subtitle: {
    textAlign: "center",
    color: "#6E6A7C",
    marginTop: 15,
    marginBottom: 70,
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    paddingBottom: 5,
    width: width * 0.9,
  },
});
