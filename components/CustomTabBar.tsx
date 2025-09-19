import { View, TouchableOpacity, StyleSheet } from "react-native";

function CustomTabBar({ state, descriptors, navigation }: any) {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route: any, index: number) => {
        if (route.name === "empty") {
          return <View key={route.key} style={{ width: 80 }} />;
        }

        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            style={styles.tabButton}
          >
            {options.tabBarIcon
              ? options.tabBarIcon({ focused: isFocused, color: "", size: 24 })
              : null}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default CustomTabBar;

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#f3ecfc",
    height: 50,
    borderRadius: 30,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  tabButton: {
    flex: 1,
    alignItems: "center",
  },
});
