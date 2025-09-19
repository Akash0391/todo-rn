import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import ScreenWrapper from "../../components/ScreenWrapper";
import Typo from "../../components/Typo";
import Button from "../../components/Button";
import * as Progress from "react-native-progress";
import ProgressBar from "../../components/ProgressBar";

const { width } = Dimensions.get("window");
const Home = () => {
  const progress = 0.85;
  return (
    <ScreenWrapper>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image
              source={require("../../assets/images/avatar.jpg")}
              style={styles.avatar}
            />
            <View style={styles.headerText}>
              <Typo
                style={{ marginBottom: 2, fontSize: 23 }}
                fontFamily="LexendDeca_500Medium"
                color={"#000"}
              >
                Hello!
              </Typo>
              <Typo
                style={{ fontSize: 30 }}
                fontFamily="LexendDeca_700Bold"
                color={"#000"}
              >
                Livia Vaccaro
              </Typo>
            </View>
          </View>

          <TouchableOpacity style={styles.notifyContainer}>
            <Image
              source={require("../../assets/images/notify.png")}
              style={styles.notify}
            />
            <View style={styles.notifyBadge}></View>
          </TouchableOpacity>
        </View>

        {/* Body */}
        <View style={styles.body}>
          {/* Your today's task */}
          <View style={styles.content}>
            <View style={styles.contentHeader}>
              <View style={styles.contentHeaderText}>
                <Typo
                  style={{ fontSize: 22 }}
                  fontFamily="LexendDeca_600SemiBold"
                  color={"white"}
                >
                  Your today&apos;s task{"\n"}almost done!
                </Typo>
                <Button onPress={() => {}} style={styles.contentHeaderButton}>
                  <Typo
                    size={15}
                    fontFamily="LexendDeca_700Bold"
                    color="#5f33e1"
                    style={{
                      textAlign: "center",
                      paddingHorizontal: 15,
                    }}
                  >
                    View Task
                  </Typo>
                </Button>
              </View>
              <View style={styles.progressContainer}>
                <Progress.Circle
                  size={100} // circle size
                  progress={progress} // 0 to 1
                  thickness={8} // ring width
                  color="#ffffff" // progress color
                  unfilledColor="grey" // background ring
                  borderWidth={0} // remove border
                />
                <View style={styles.textWrapper}>
                  <Typo style={styles.text}>{Math.round(progress * 100)}%</Typo>
                </View>
              </View>
            </View>
            <View>
              <Image
                source={require("../../assets/images/moreImage.png")}
                style={styles.moreImage}
              />
            </View>
          </View>

          {/* In Progress */}
          <View style={styles.inProgressContainer}>
            <Typo
              style={{ fontSize: 26, fontWeight: "600", color: "#000" }}
              fontFamily="LexendDeca_600SemiBold"
            >
              In Progress
            </Typo>
            <Image
              source={require("../../assets/images/two.png")}
              style={styles.numberImage}
            />
          </View>

          {/* In Progress tasks */}
          <View style={styles.inProgressTasksContainer}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {/* First Task */}
              <View style={styles.inProgressFirstTasks}>
                <View style={styles.inProgressTasksHeader}>
                  <Typo
                    style={{
                      fontSize: 22,
                      fontWeight: "500",
                      color: "grey",
                    }}
                    fontFamily="LexendDeca_500Medium"
                  >
                    Office Project
                  </Typo>
                  <Image
                    source={require("../../assets/images/officeProject.png")}
                    style={styles.officeImage}
                  />
                </View>
                <View style={styles.inProgressFirstTasksText}>
                  <Typo
                    style={{ fontSize: 28, fontWeight: "500", color: "black" }}
                    fontFamily="LexendDeca_500Medium"
                  >
                    Grocery shopping app design
                  </Typo>
                  <ProgressBar progress={70} color="#1E90FF" />
                </View>
              </View>

              {/* Second Task */}
              <View style={styles.inProgressSecondTasks}>
                <View style={styles.inProgressTasksHeader}>
                  <Typo
                    style={{
                      fontSize: 22,
                      fontWeight: "500",
                      color: "grey",
                    }}
                    fontFamily="LexendDeca_500Medium"
                  >
                    Personal Project
                  </Typo>
                  <Image
                    source={require("../../assets/images/personal.png")}
                    style={styles.personalImage}
                  />
                </View>
                <View style={styles.inProgressFirstTasksText}>
                  <Typo
                    style={{ fontSize: 28, fontWeight: "500", color: "black" }}
                    fontFamily="LexendDeca_500Medium"
                  >
                    Uber Eats redesign challenge
                  </Typo>
                  <ProgressBar progress={52} color="darkorange" />
                </View>
              </View>
            </ScrollView>
          </View>

          {/* In Progress */}
          <View style={styles.inProgressContainer}>
            <Typo
              style={{ fontSize: 26, fontWeight: "600", color: "#000" }}
              fontFamily="LexendDeca_600SemiBold"
            >
              Task Groups
            </Typo>
            <Image
              source={require("../../assets/images/four.png")}
              style={styles.numberImage}
            />
          </View>

          <View style={styles.taskGroupsContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.taskGroup}>
                <View style={styles.taskGroupHeader}>
                  <Image
                    source={require("../../assets/images/officeProject.png")}
                    style={styles.taskFirstImage}
                  />
                  <View style={styles.taskGroupHeaderText}>
                    <Typo
                      style={{
                        fontSize: 22,
                        color: "black",
                      }}
                      fontFamily="LexendDeca_500Medium"
                    >
                      Office Project
                    </Typo>
                    <Typo
                      style={{
                        fontSize: 18,
                        color: "grey",
                      }}
                      fontFamily="LexendDeca_500Medium"
                    >
                      23 Tasks
                    </Typo>
                  </View>
                </View>
                <View style={styles.taskGroupProgressBar}>
                  <Progress.Circle
                    size={60} // circle size
                    progress={0.7} // 0 to 1
                    thickness={4.7} // ring width
                    color="#FF77B8" // progress color
                    unfilledColor="#FFE5F0" // background ring
                    borderWidth={0} // remove border
                  />
                  <View style={styles.textPercentageWrapper}>
                    <Typo style={styles.textPercentage}>70%</Typo>
                  </View> 
                </View>
              </View>
              <View style={styles.taskGroup}>
                <View style={styles.taskGroupHeader}>
                  <Image
                    source={require("../../assets/images/personal.png")}
                    style={styles.taskSecondImage}
                  />
                  <View style={styles.taskGroupHeaderText}>
                    <Typo
                      style={{
                        fontSize: 22,
                        color: "black",
                      }}
                      fontFamily="LexendDeca_500Medium"
                    >
                      Personal Project
                    </Typo>
                    <Typo
                      style={{
                        fontSize: 18,
                        color: "grey",
                      }}
                      fontFamily="LexendDeca_500Medium"
                    >
                      30 Tasks
                    </Typo>
                  </View>
                </View>
                <View style={styles.taskGroupProgressBar}>
                  <Progress.Circle
                    size={60} // circle size
                    progress={0.52} // 0 to 1
                    thickness={4.7} // ring width
                    color="#5F33E1" // progress color
                    unfilledColor="#E5E5E5" // background ring
                    borderWidth={0} // remove border
                  />
                  <View style={styles.textPercentageWrapper}>
                    <Typo style={styles.textPercentage}>52%</Typo>
                  </View> 
                </View>
              </View>
            </ScrollView> 
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  body: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 25,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  headerText: {
    marginLeft: 14,
    margin: 0,
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  notifyContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
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
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#5F33E1",
    width: "100%",
    borderRadius: 30,
  },
  contentHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  contentHeaderText: {
    flexDirection: "column",
    padding: 10,
    gap: 50,
  },
  moreImage: {
    width: 50,
    height: 50,
  },
  contentHeaderButton: {
    backgroundColor: "white",
    width: width * 0.36,
    borderRadius: 20,
  },
  progressContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
  },
  textWrapper: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
  inProgressContainer: {
    marginTop: 25,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  numberImage: {
    width: 23,
    height: 23,
    borderRadius: 20,
  },
  inProgressTasksContainer: {
    marginTop: 25,
  },

  inProgressFirstTasks: {
    flexDirection: "column",
    paddingLeft: 20,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 20,
    backgroundColor: "lightblue",
    width: width * 0.8,
    borderRadius: 20,
    marginRight: 16,
  },
  inProgressSecondTasks: {
    flexDirection: "column",
    paddingLeft: 20,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 20,
    backgroundColor: "lightpink",
    width: width * 0.8,
    borderRadius: 20,
    marginRight: 16,
  },

  inProgressTasksHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  inProgressFirstTasksText: {
    marginRight: 15,
    flexDirection: "column",
    gap: 30,
  },

  officeImage: {
    width: 50,
    height: 50,
  },
  personalImage: {
    width: 50,
    height: 50,
  },
  taskGroupsContainer: {
    marginTop: 20,
  },
  taskGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 10,
    paddingRight: 25,
    borderRadius: 15,
    marginBottom: 10,
  },
  taskFirstImage: {
    width: 50,
    height: 50,
  },
  taskSecondImage: {
    width: 40,
    height: 40,
    marginRight: 5,
    marginLeft: 6,
  },
  taskGroupHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  taskGroupBody: {
    flexDirection: "column",
    gap: 10,
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
  textPercentageWrapper: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
  textPercentage: {
    fontSize: 18,
    fontWeight: "600",
    color: "black",
    fontFamily: "LexendDeca_500Medium",
  },
});
