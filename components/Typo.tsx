import { Text, TextProps, TextStyle } from 'react-native'
import React from 'react'

interface TypoProps {
    size?: number;
    color?: string;
    fontFamily?: "LexendDeca_400Regular" | "LexendDeca_500Medium" | "LexendDeca_700Bold" | "LexendDeca_600SemiBold";
    children: React.ReactNode;
    style?: TextStyle;
    textProps?: TextProps;
}
const Typo = ({
    size,
    color,
    fontFamily,
    children,
    style,
    textProps = {},
}: TypoProps) => {

    const textStyle: TextStyle = {
        fontSize: size,
        color,
        fontFamily 
    }
  return (
    <Text style={[textStyle, style]} {...textProps}>
        {children}
    </Text>
  )
}

export default Typo