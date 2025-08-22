import { Text, TextProps, TextStyle } from 'react-native'
import React from 'react'

interface TypoProps {
    size?: number;
    color?: string;
    fontWeight?: "400" | "normal" | "bold" | "100" | "200" | "300" | "500" | "600" | "700" | "800" | "900" | "ultralight" | "thin" | "light" | "medium" | "semibold" | "black";
    children: React.ReactNode;
    style?: TextStyle;
    textProps?: TextProps;
}
const Typo = ({
    size,
    color,
    fontWeight,
    children,
    style,
    textProps = {},
}: TypoProps) => {

    const textStyle: TextStyle = {
        fontSize: size,
        color,
        fontWeight       
    }
  return (
    <Text style={[textStyle, style]} {...textProps}>
        {children}
    </Text>
  )
}

export default Typo