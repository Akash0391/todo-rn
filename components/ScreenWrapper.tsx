     
import { View, Platform, StatusBar, Dimensions, ImageBackground, StyleProp, ViewStyle } from 'react-native'   
import React from 'react'

  
const { height } = Dimensions.get("window");

interface ScreenWrapperProps {
    children: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    showPattern?: boolean;
    isModal?: boolean;
    bgOpacity?: number;
}
const ScreenWrapper = ({
    children,
    style,  
    showPattern = true,
    isModal = false,
    bgOpacity = 1,
}: ScreenWrapperProps) => {

    let paddingTop = Platform.OS === "ios" ? height * 0.06 : 40;
    let paddingBottom = 0;

    if(isModal) {
        paddingTop = Platform.OS === "ios" ? height * 0.02 : 50;  
        paddingBottom = height * 0.02;
    }

  return (
    <ImageBackground 
        style={{
        flex: 1,
        backgroundColor: isModal ? "white" : "black",  
    }}
    imageStyle={{ opacity: showPattern ? bgOpacity : 0}}
    source={require("@/assets/images/bgImage.png")}
    >
      <View style={{
        flex: 1,
        paddingTop,
        paddingBottom,
      }}>
        <StatusBar
          translucent={false}
          barStyle={isModal ? 'dark-content' : 'light-content'}
          backgroundColor={isModal ? "white" : "black"}
        />
        {children}
      </View>
    </ImageBackground>
  ) 
}

export default ScreenWrapper