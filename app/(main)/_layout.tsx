import { router, Tabs } from "expo-router";
import { Image, View, StyleSheet, TouchableOpacity } from "react-native";
import { icons } from "@/constants/icons";
import CustomTabBar from "@/components/CustomTabBar";

interface TabBarIconProps {
  focused: boolean;
  icon: any;
}

const TabBarIcon = ({ focused, icon }: TabBarIconProps) => (
  <View style={[styles.iconWrapper, focused && styles.focusedShadow]}>
    <Image
      source={icon}
      style={[styles.icon, { tintColor: focused ? "#5F33E1" : "#826AC6" }]}
      resizeMode="contain"
    />
  </View>
);

export default function TabsLayout() {
  return (
    <View style={styles.container}>
      <Tabs
        tabBar={(props) => <CustomTabBar {...props} />}
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
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

        <Tabs.Screen name="empty" options={{ tabBarButton: () => null }} />

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
      <FloatingButton />
    </View>
  );
}

export function FloatingButton() {
  return (
    <TouchableOpacity
      style={styles.fab}
      onPress={() => router.push("/add")}
    >
      <Image
        source={icons.plus}
        style={{ width: 23, height: 23, tintColor: "white" }}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconWrapper: {
    marginTop: 15,
    width: 28,
    height: 28,
    borderRadius: 25,
  },
  icon: {
    width: 28,  
    height: 28,
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
    bottom: 35,
    alignSelf: "center",
    width: 65,
    height: 65,
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
