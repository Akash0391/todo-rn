import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import ScreenWrapper from "../../components/ScreenWrapper";
import Typo from "@/components/Typo";
import { router } from "expo-router";

const Calender = () => {
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
            Today&apos;s Tasks
          </Typo>

          <TouchableOpacity style={styles.notifyContainer}>
            <Image
              source={require("../../assets/images/notify.png")}
              style={styles.notify}
            />
            <View style={styles.notifyBadge}></View>
          </TouchableOpacity>
        </View>

        <View style={styles.dates}>
          <View style={styles.datesContainer}>
            <Typo style={styles.datesText}>May</Typo>
            <Typo style={{ fontSize: 26, fontFamily: "LexendDeca_700Bold" }}>
              23
            </Typo>
            <Typo style={styles.datesText}>Fri</Typo>
          </View>
          <View style={styles.datesContainer}>
            <Typo style={styles.datesText}>May</Typo>
            <Typo style={{ fontSize: 26, fontFamily: "LexendDeca_700Bold" }}>
              24
            </Typo>
            <Typo style={styles.datesText}>Sat</Typo>
          </View>
          <View style={[styles.datesContainer, styles.datesContainerActive]}>
            <Typo style={styles.datesText} color="white">
              May
            </Typo>
            <Typo
              style={{ fontSize: 26, fontFamily: "LexendDeca_700Bold" }}
              color="white"
            >
              25
            </Typo>
            <Typo style={styles.datesText} color="white">
              Sun
            </Typo>
          </View>
          <View style={styles.datesContainer}>
            <Typo style={styles.datesText}>May</Typo>
            <Typo style={{ fontSize: 26, fontFamily: "LexendDeca_700Bold" }}>
              26
            </Typo>
            <Typo style={styles.datesText}>Mon</Typo>
          </View>
          <View style={styles.datesContainer}>
            <Typo style={styles.datesText}>May</Typo>
            <Typo style={{ fontSize: 26, fontFamily: "LexendDeca_700Bold" }}>
              27
            </Typo>
            <Typo style={styles.datesText}>Tue</Typo>
          </View>
        </View>

        <View style={styles.categories}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.categoriesContainer}>
              <View
                style={[styles.categoriesItem, styles.categoriesItemActive]}
              >
                <Typo style={styles.categoriesText} color="white">
                  All
                </Typo>
              </View>
              <View
                style={[styles.categoriesItem, styles.categoriesItemNotActive]}
              >
                <Typo style={styles.categoriesText} color="#5F33E1">
                  TO DO
                </Typo>
              </View>
              <View
                style={[styles.categoriesItem, styles.categoriesItemNotActive]}
              >
                <Typo style={styles.categoriesText} color="#5F33E1">
                  In Progress
                </Typo>
              </View>
              <View
                style={[styles.categoriesItem, styles.categoriesItemNotActive]}
              >
                <Typo style={styles.categoriesText} color="#5F33E1">
                  Completed
                </Typo>
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={styles.tasksContainer}>
          <View style={styles.tasksItem}>
            <View style={styles.tasks}>
              <View style={styles.upperTasksText}>
                <Typo
                  style={{
                    fontSize: 16,
                    fontFamily: "LexendDeca_400Regular",
                    color: "grey",
                  }}
                >
                  Grocery shopping app design
                </Typo>
                <Image
                  source={require("../../assets/images/officeProject.png")}
                  style={styles.officeImage}
                />
              </View>
              <View style={styles.middleTasksText}>
                <Typo
                  style={{
                    fontSize: 20,
                    fontFamily: "LexendDeca_600SemiBold",
                    color: "#000",
                  }}
                >
                  Market Research
                </Typo>
              </View>
              <View style={styles.lowerTasksText}>
                <View style={styles.timeContainer}>
                  <Image
                    source={require("../../assets/images/time.png")}
                    style={styles.timeImage}
                  />
                  <Typo
                    style={{
                      fontSize: 14,
                      fontFamily: "LexendDeca_400Regular",
                      color: "#9B7DF5",
                    }}
                  >
                    10:00 AM
                  </Typo>
                </View>
                <View style={styles.tasksUpdateContainerDone}>
                  <Typo
                    style={{
                      fontSize: 14,
                      fontFamily: "LexendDeca_400Regular",
                      color: "#9B7DF5",
                    }}
                  >
                    Done
                  </Typo>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.tasksItem}>
            <View style={styles.tasks}>
              <View style={styles.upperTasksText}>
                <Typo
                  style={{
                    fontSize: 16,
                    fontFamily: "LexendDeca_400Regular",
                    color: "grey",
                  }}
                >
                  Grocery shopping app design
                </Typo>
                <Image
                  source={require("../../assets/images/officeProject.png")}
                  style={styles.officeImage}
                />
              </View>
              <View style={styles.middleTasksText}>
                <Typo
                  style={{
                    fontSize: 20,
                    fontFamily: "LexendDeca_600SemiBold",
                    color: "#000",
                  }}
                >
                  Competitive Analysis
                </Typo>
              </View>
              <View style={styles.lowerTasksText}>
                <View style={styles.timeContainer}>
                  <Image
                    source={require("../../assets/images/time.png")}
                    style={styles.timeImage}
                  />
                  <Typo
                    style={{
                      fontSize: 14,
                      fontFamily: "LexendDeca_400Regular",
                      color: "#9B7DF5",
                    }}
                  >
                    12:00 PM
                  </Typo>
                </View>
                <View style={styles.tasksUpdateContainerInProgress}>
                  <Typo
                    style={{
                      fontSize: 14,
                      fontFamily: "LexendDeca_400Regular",
                      color: "#FFA500",
                    }}
                  >
                    In Progress
                  </Typo>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.tasksItem}>
            <View style={styles.tasks}>
              <View style={styles.upperTasksText}>
                <Typo
                  style={{
                    fontSize: 16,
                    fontFamily: "LexendDeca_400Regular",
                    color: "grey",
                  }}
                >
                  Uber Eats redesign challenge
                </Typo>
                <Image
                  source={require("../../assets/images/personal.png")}
                  style={styles.personImage}
                />
              </View>
              <View style={styles.middleTasksText}>
                <Typo
                  style={{
                    fontSize: 20,
                    fontFamily: "LexendDeca_600SemiBold",
                    color: "#000",
                  }}
                >
                  Create Low-fidelity Wireframe
                </Typo>
              </View>
              <View style={styles.lowerTasksText}>
                <View style={styles.timeContainer}>
                  <Image
                    source={require("../../assets/images/time.png")}
                    style={styles.timeImage}
                  />
                  <Typo
                    style={{
                      fontSize: 14,
                      fontFamily: "LexendDeca_400Regular",
                      color: "#9B7DF5",
                    }}
                  >
                    07:00 PM
                  </Typo>
                </View>
                <View style={styles.tasksUpdateContainerToDo}>
                  <Typo
                    style={{
                      fontSize: 14,
                      fontFamily: "LexendDeca_400Regular",
                      color: "#007BFF",
                    }}
                  >
                    TO DO
                  </Typo>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.tasksItem}>
            <View style={styles.tasks}>
              <View style={styles.upperTasksText}>
                <Typo
                  style={{
                    fontSize: 16,
                    fontFamily: "LexendDeca_400Regular",
                    color: "grey",
                  }}
                >
                  About design sprint
                </Typo>
                <Image
                  source={require("../../assets/images/book.png")}
                  style={styles.bookImage}
                />
              </View>
              <View style={styles.middleTasksText}>
                <Typo
                  style={{
                    fontSize: 20,
                    fontFamily: "LexendDeca_600SemiBold",
                    color: "#000",
                  }}
                >
                  How to pitch a Design Sprint
                </Typo>
              </View>
              <View style={styles.lowerTasksText}>
                <View style={styles.timeContainer}>
                  <Image
                    source={require("../../assets/images/time.png")}
                    style={styles.timeImage}
                  />
                  <Typo
                    style={{
                      fontSize: 14,
                      fontFamily: "LexendDeca_400Regular",
                      color: "#9B7DF5",
                    }}
                  >
                    09:00 PM
                  </Typo>
                </View>
                <View style={styles.tasksUpdateContainerToDo}>
                  <Typo
                    style={{
                      fontSize: 14,
                      fontFamily: "LexendDeca_400Regular",
                      color: "#007BFF",
                    }}
                  >
                    TO DO
                  </Typo>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Calender;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 25,
    paddingHorizontal: 20,
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
  dates: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    gap: 5,
  },
  datesContainer: {
    paddingHorizontal: 22,
    paddingVertical: 10,
    backgroundColor: "white",
    borderRadius: 18,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  datesText: {
    fontSize: 16,
    fontFamily: "LexendDeca_400Regular",
  },
  datesContainerActive: {
    backgroundColor: "#5F33E1",
  },
  categories: {
    marginTop: 35,
    marginLeft: 20,
  },
  categoriesContainer: {
    flexDirection: "row",
    gap: 10,
  },
  categoriesText: {
    fontSize: 18,
    fontFamily: "LexendDeca_500Medium",
  },
  categoriesItem: {
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 15,
  },
  categoriesItemActive: {
    backgroundColor: "#5F33E1",
    borderRadius: 15,
    color: "white",
  },
  categoriesItemNotActive: {
    backgroundColor: "#f3ecfc",
  },
  tasksContainer: {
    flexDirection: "column",
    gap: 20,
    marginTop: 30,
    paddingHorizontal: 20,
  },
  tasksItem: {
    flexDirection: "row",
  },
  tasks: {
    flex: 1,
    flexDirection: "column",
    paddingVertical: 15,
    paddingLeft: 22,
    paddingRight: 15,
    gap: 2,
    backgroundColor: "white",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  upperTasksText: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  officeImage: {
    width: 40,
    height: 30,
  },
  middleTasksText: {},
  lowerTasksText: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  timeImage: {
    width: 15,
    height: 15,
  },
  tasksUpdateContainerDone: {
    backgroundColor: "#f3ecfc",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
  },
  tasksUpdateContainerInProgress: {
    backgroundColor: "#FFEACC",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
  },
  tasksUpdateContainerToDo: {
    backgroundColor: "#CCE4FF",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
  },
  bookImage: {
    marginRight: 5,
    width: 30,
    height: 30,
  },
  personImage: {
    marginRight: 5,
    width: 30,
    height: 30,
  },
});
