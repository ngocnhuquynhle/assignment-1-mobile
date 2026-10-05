import {
  Alert,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Index() {
  return (
    <View style={styles.screen}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.header}>
          <Text style={styles.greeting}>
            Have the best evening,{"\n"}Quinn 💫
          </Text>
        </View>

        <View style={styles.menu}>
          <View style={styles.menuLeft}>
            <View style={styles.menuItem}>
              <Text style={styles.menuIcon}>✉️</Text>
              <Text style={styles.menuText}>Inbox</Text>
            </View>

            <View style={styles.menuItem}>
              <Text style={styles.menuIcon}>📍</Text>
              <Text style={styles.menuText}>Cafés</Text>
            </View>
          </View>

          <View style={styles.menuRight}>
            <Text style={styles.menuIcon}>🧾</Text>
            <Text style={styles.menuIcon}>👤</Text>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.balanceCard}>
            <View>
              <Text style={styles.balanceLabel}>Star balance</Text>

              <Text style={styles.balanceNumber}>39★</Text>
            </View>

            <View style={styles.statusArea}>
              <Text style={styles.statusText}>GREEN{"\n"}STATUS</Text>

              <Text style={styles.arrow}>›</Text>
            </View>
          </View>

          <View style={styles.bonusCard}>
            <View style={styles.bonusHeader}>
              <Text style={styles.collectText}>Collect</Text>

              <Text style={styles.bonusTitle}>
                30 Bonus Stars <Text style={styles.goldStar}>★</Text>
              </Text>

              <Text style={styles.dateText}>Oct 2–4</Text>
            </View>

            <View style={styles.bonusBody}>
              <Text style={styles.offerTitle}>
                Spend at least $15 for 30 Bonus Stars
              </Text>

              <Text style={styles.description}>
                Collect 30 Bonus Stars when you spend at least $15 pre-tax in a
                single order.
              </Text>

              <View style={styles.cardButtons}>
                <View style={styles.startButton}>
                  <Text style={styles.startButtonText}>Start</Text>
                </View>

                <Text style={styles.termsText}>Terms</Text>
              </View>
            </View>
          </View>

          <View style={styles.secondBonusCard}>
            <View style={styles.secondBonusHeader}>
              <Text style={styles.secondCollectText}>Collect</Text>

              <Text style={styles.secondBonusTitle}>
                100 Bonus Stars <Text style={styles.goldStar}>★</Text>
              </Text>

              <Text style={styles.secondDateText}>Sep 28–Oct 4</Text>
            </View>

            <View style={styles.secondBonusBody}>
              <Text style={styles.secondOfferTitle}>
                Try these 3 delicious things
              </Text>

              <Text style={styles.secondDescription}>
                Come in and try these menu items in any order, or all at the
                same time.
              </Text>

              <Text style={styles.foodItem}>• a Strawberry Açaí Refresher</Text>

              <Text style={styles.foodItem}>• an Iced Passion Tango™ Tea</Text>

              <Text style={styles.foodItem}>• a bakery item</Text>

              <View style={styles.scanButton}>
                <Text style={styles.scanButtonText}>Scan in café</Text>
              </View>
            </View>
          </View>

          <Pressable
            style={styles.alertButton}
            onPress={() => {
              if (Platform.OS === "web") {
                window.alert("Alert Button pressed");
              } else {
                Alert.alert("Alert Button pressed");
              }
            }}
          >
            <Text style={styles.alertButtonText}>Alert</Text>
          </Pressable>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <View style={styles.navItem}>
          <Text style={styles.homeIcon}>⌂</Text>
          <Text style={styles.homeText}>Home</Text>
        </View>

        <View style={styles.navItem}>
          <Text style={styles.navIcon}>▦</Text>
          <Text style={styles.navText}>Scan</Text>
        </View>

        <View style={styles.navItem}>
          <Text style={styles.navIcon}>🥤</Text>
          <Text style={styles.navText}>Order</Text>
        </View>

        <View style={styles.navItem}>
          <Text style={styles.navIcon}>🎁</Text>
          <Text style={styles.navText}>Gift</Text>
        </View>

        <View style={styles.navItem}>
          <Text style={styles.navIcon}>★</Text>
          <Text style={styles.navText}>Rewards</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },

  scrollContent: {
    paddingBottom: 10,
  },

  header: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
    paddingTop: 70,
    paddingBottom: 45,
  },

  greeting: {
    fontSize: 34,
    fontWeight: "700",
    color: "#000000",
    lineHeight: 42,
  },

  menu: {
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#d1d1d1",
  },

  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 25,
  },

  menuRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 22,
  },

  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },

  menuIcon: {
    fontSize: 25,
  },

  menuText: {
    fontSize: 18,
    color: "#222222",
  },

  content: {
    padding: 15,
  },

  balanceCard: {
    backgroundColor: "#006241",
    borderRadius: 7,
    paddingHorizontal: 22,
    paddingVertical: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,

    elevation: 3,
  },

  balanceLabel: {
    color: "#ffffff",
    fontSize: 17,
    marginBottom: 5,
  },

  balanceNumber: {
    color: "#ffffff",
    fontSize: 38,
    fontWeight: "700",
  },

  statusArea: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },

  statusText: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "700",
    lineHeight: 24,
  },

  arrow: {
    color: "#ffffff",
    fontSize: 40,
    fontWeight: "300",
  },

  bonusCard: {
    backgroundColor: "#ffffff",
    borderRadius: 7,
    overflow: "hidden",
    marginTop: 16,

    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,

    elevation: 3,
  },

  bonusHeader: {
    backgroundColor: "#006241",
    paddingHorizontal: 22,
    paddingVertical: 25,
  },

  collectText: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 8,
  },

  bonusTitle: {
    color: "#ffffff",
    fontSize: 23,
    fontWeight: "700",
    marginBottom: 12,
  },

  goldStar: {
    color: "#d4a037",
  },

  dateText: {
    color: "#ffffff",
    fontSize: 15,
  },

  bonusBody: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 22,
    paddingVertical: 25,
  },

  offerTitle: {
    color: "#111111",
    fontSize: 19,
    fontWeight: "700",
    marginBottom: 14,
  },

  description: {
    color: "#333333",
    fontSize: 16,
    lineHeight: 23,
  },

  cardButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 25,
  },

  startButton: {
    backgroundColor: "#00754a",
    paddingHorizontal: 22,
    paddingVertical: 11,
    borderRadius: 25,
  },

  startButtonText: {
    color: "#ffffff",
    fontSize: 17,
    fontWeight: "700",
  },

  termsText: {
    color: "#00754a",
    fontSize: 17,
    fontWeight: "700",
  },

  secondBonusCard: {
    backgroundColor: "#ffffff",
    borderRadius: 7,
    overflow: "hidden",
    marginTop: 16,
    marginBottom: 16,

    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,

    elevation: 3,
  },

  secondBonusHeader: {
    backgroundColor: "#f3eadb",
    paddingHorizontal: 22,
    paddingVertical: 25,
  },

  secondCollectText: {
    color: "#222222",
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 8,
  },

  secondBonusTitle: {
    color: "#222222",
    fontSize: 23,
    fontWeight: "700",
    marginBottom: 12,
  },

  secondDateText: {
    color: "#333333",
    fontSize: 15,
  },

  secondBonusBody: {
    backgroundColor: "#ffffff",
    paddingHorizontal: 22,
    paddingVertical: 25,
  },

  secondOfferTitle: {
    color: "#111111",
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 15,
  },

  secondDescription: {
    color: "#333333",
    fontSize: 16,
    lineHeight: 23,
    marginBottom: 18,
  },

  foodItem: {
    color: "#333333",
    fontSize: 16,
    lineHeight: 27,
  },

  scanButton: {
    backgroundColor: "#00754a",
    paddingHorizontal: 28,
    paddingVertical: 14,
    borderRadius: 30,
    alignSelf: "flex-end",
    marginTop: 20,
  },

  scanButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "700",
  },

  alertButton: {
    backgroundColor: "#00754a",
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20,
  },

  alertButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "700",
  },

  bottomNav: {
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 15,
    borderTopWidth: 1,
    borderTopColor: "#dddddd",
  },

  navItem: {
    alignItems: "center",
    justifyContent: "center",
  },

  navIcon: {
    fontSize: 25,
    color: "#777777",
  },

  navText: {
    fontSize: 13,
    color: "#666666",
    marginTop: 3,
  },

  homeIcon: {
    fontSize: 27,
    color: "#00754a",
  },

  homeText: {
    fontSize: 13,
    color: "#00754a",
    fontWeight: "700",
    marginTop: 3,
  },
});
