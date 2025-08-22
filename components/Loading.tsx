import { ActivityIndicator, ActivityIndicatorProps, View } from 'react-native'
import React from 'react'
  

const Loading = ({
    size = "large",
    color = "white",
}: ActivityIndicatorProps) => {
  return (
    <View style={{flex:1, justifyContent: "center", alignItems: "center"}}>
        <ActivityIndicator size={size} color={color} />
    </View>
  )
}

export default Loading  