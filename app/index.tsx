import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FitnessApp</Text>
      <Text style={styles.subtitle}>What would you like to do?</Text>

      <View style={styles.actionsContainer}>
        <Link href="/food" asChild>
          <Pressable style={styles.card}>
            <Ionicons name="restaurant-outline" size={40} color="#4CAF50" />
            <Text style={styles.cardTitle}>Food Tracking</Text>
            <Text style={styles.cardDescription}>
              Log meals and track your nutrition
            </Text>
          </Pressable>
        </Link>

        <Link href="/workouts" asChild>
          <Pressable style={styles.card}>
            <Ionicons name="barbell-outline" size={40} color="#2196F3" />
            <Text style={styles.cardTitle}>Workouts</Text>
            <Text style={styles.cardDescription}>
              Plan and track your exercises
            </Text>
          </Pressable>
        </Link>

        <Link href="/stats" asChild>
          <Pressable style={styles.card}>
            <Ionicons name="pie-chart" size={40} color="#e61111" />
            <Text style={styles.cardTitle}>Stats</Text>
            <Text style={styles.cardDescription}>
              Check stats.
            </Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginBottom: 32,
  },
  actionsContainer: {
    gap: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 24,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 12,
    marginBottom: 4,
  },
  cardDescription: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
  },
});
