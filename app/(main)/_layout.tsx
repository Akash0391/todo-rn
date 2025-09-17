import { router, Tabs } from "expo-router";
import { Image, View, TouchableOpacity, StyleSheet } from "react-native";
import { icons } from "@/constants/icons";

interface TabBarIconProps {
  focused: boolean;
  icon: any;
}

const TabBarIcon = ({ focused, icon }: TabBarIconProps) => (
  <View style={[styles.iconWrapper, focused && styles.focusedShadow]}>
    <Image
      source={icon}
      style={[
        styles.icon,
        { tintColor:focused ? "#5F33E1" : "#826AC6" },
      ]}
      resizeMode="contain"
    />
  </View>
);

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={icons.home} />
          ),
        }}
      />

      <Tabs.Screen
        name="calendar"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={icons.calendar} />  
          ),
        }}
      />

      {/* Floating Button */}
      <Tabs.Screen
        name="add"
        options={{
          tabBarButton: () => (
            <TouchableOpacity style={styles.fab} onPress={() => router.push("/add")}>
              <Image
                source={icons.plus}
                style={{ width: 23, height: 23, tintColor: "white" }}
              />
            </TouchableOpacity>
          ),
        }}
      />

      <Tabs.Screen
        name="notes"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={icons.notes} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcon focused={focused} icon={icons.profile} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    height: 75,
    borderRadius: 30,
    backgroundColor: "#f3ecfc",
  },
  iconWrapper: {
    marginTop: 30,
    width: 30,
    height: 30,
    borderRadius: 25,
  },
  icon: {
    width: 30,
    height: 30,
  },
  focusedShadow: {
    shadowColor: "#5F33E1",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 2,
    shadowRadius: 12,
    elevation: 8, 
  },
  fab: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#5F33E1",
    alignItems: "center",
    justifyContent: "center",
    elevation: 10,
    shadowColor: "#5F33E1",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
});
