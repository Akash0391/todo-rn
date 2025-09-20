import ScreenWrapper from "@/components/ScreenWrapper";
import Typo from "@/components/Typo";
import { View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { router } from "expo-router";
import { icons } from "@/constants/icons";

export default function AddPage() {
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Image
              source={require("../../assets/images/arrow-left.png")}
              style={styles.arrowLeft}
            />
          </TouchableOpacity>

          <Typo
            style={{ fontSize: 24 }}
            fontFamily="LexendDeca_700Bold"
            color={"#000"}
          >
            Add Project
          </Typo>

          <TouchableOpacity style={styles.notifyContainer}>
            <Image
              source={require("../../assets/images/notify.png")}
              style={styles.notify}
            />
            <View style={styles.notifyBadge}></View>
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <View style={styles.taskGroup}>
            <View style={styles.taskGroupHeader}>
              <Image
                source={require("../../assets/images/officeProject.png")}
                style={styles.taskFirstImage}
              />
              <View style={styles.taskGroupHeaderText}>
                <Typo
                  style={{
                    fontSize: 12,
                    color: "grey",
                  }}
                  fontFamily="LexendDeca_500Medium"
                >
                  Task Group
                </Typo>
                <Typo
                  style={{
                    fontSize: 20,
                    color: "black",
                  }}
                  fontFamily="LexendDeca_600SemiBold"
                >
                  Work
                </Typo>
              </View>
            </View>
            <View style={styles.taskGroupProgressBar}>
              <Image
                source={require("../../assets/images/down-arrow.png")}
                style={styles.downArrowImage}
              />
            </View>
          </View>
          <View style={styles.secondTaskGroup}>
            <View style={styles.secondTaskGroupBodyText}>
              <Typo
                style={{
                  fontSize: 12,
                  color: "grey",
                }}
                fontFamily="LexendDeca_500Medium"
              >
                Project Name
              </Typo>
              <Typo
                style={{
                  fontSize: 20,
                  color: "black",
                }}
                fontFamily="LexendDeca_600SemiBold"
              >
                Grocery Shopping App
              </Typo>
            </View>
          </View>
          <View style={styles.descriptionContainer}>
            <View style={styles.descriptionBodyText}>
              <Typo
                style={{
                  fontSize: 12,
                  color: "grey",
                }}
                fontFamily="LexendDeca_500Medium"
              >
                Description
              </Typo>
              <Typo
                style={{
                  fontSize: 15,
                  color: "black",
                }}
                fontFamily="LexendDeca_500Medium"
              >
                This application is designed for super shops. By using this
                application they can enlist all their products in one place and
                can deliver. Customers will get a one-stop solution for their
                daily shopping.
              </Typo>
            </View>
          </View>

          <View style={styles.dateContainer}>
            <View style={styles.taskGroupHeader}>
              <Image
                source={icons.calendar}
                style={styles.dateImage}
              />
              <View style={styles.dateBodyText}>
                <Typo
                  style={{
                    fontSize: 12,
                    color: "grey",
                  }}
                  fontFamily="LexendDeca_500Medium"
                >
                  Start Date
                </Typo>
                <Typo
                  style={{
                    fontSize: 20,
                    color: "black",
                  }}
                  fontFamily="LexendDeca_600SemiBold"
                >
                  01 May, 2022
                </Typo>
              </View>
            </View>
            <View style={styles.taskGroupProgressBar}>
              <Image
                source={require("../../assets/images/down-arrow.png")}
                style={styles.downArrowImage}
              />
            </View>
          </View>

          <View style={styles.dateContainer}>
            <View style={styles.taskGroupHeader}>
              <Image
                source={icons.calendar}
                style={styles.dateImage}
              />
              <View style={styles.dateBodyText}>
                <Typo
                  style={{
                    fontSize: 12,
                    color: "grey",
                  }}
                  fontFamily="LexendDeca_500Medium"
                >
                  End Date
                </Typo>
                <Typo
                  style={{
                    fontSize: 20,
                    color: "black",
                  }}
                  fontFamily="LexendDeca_600SemiBold"
                >
                  30 June, 2022
                </Typo>
              </View>
            </View>
            <View style={styles.taskGroupProgressBar}>
              <Image
                source={require("../../assets/images/down-arrow.png")}
                style={styles.downArrowImage}
              />
            </View>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 25,
  },
  arrowLeft: {
    width: 30,
    height: 30,
  },
  notifyContainer: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 5,
  },
  notify: {
    width: 30,
    height: 30,
  },
  notifyBadge: {
    position: "absolute",
    top: 0,
    right: 3,
    backgroundColor: "#7b4bff",
    borderRadius: 10,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  body: {
    flex: 1,
  },
  taskGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  taskFirstImage: {
    width: 40,
    height: 40,
  },
  taskGroupHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  secondTaskGroup: {
    backgroundColor: "white",
    padding: 20,
    marginTop: 30,
    borderRadius: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  secondTaskGroupBodyText: {
    flexDirection: "column",
  },
  descriptionContainer: {
    backgroundColor: "white",
    padding: 20,
    paddingBottom: 60,
    marginTop: 30,
    borderRadius: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  descriptionBodyText: {
    flexDirection: "column",
    gap: 15,
  },
  taskGroupHeaderText: {
    flexDirection: "column",
  },
  taskGroupProgressBar: {
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    width: 55,
    height: 55,
    borderRadius: 25,
  },
  downArrowImage: {
    width: 25,
    height: 25,
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginTop: 30,
    borderRadius: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  dateBodyText: {
    marginLeft: 8,
    flexDirection: "column",
  },
  dateImage: {
    marginLeft: 10,
    width: 25,
    height: 25,
  },
});
