// LoadingScreen.js
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";

type Props = {
  fetchData: () => Promise<ApiResponse>;
  redirectTo: string;
};

export default function LoadingPage() {
  const { fetchData, redirectTo } = useLocalSearchParams() as unknown as Props;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchData();
        // Process the data as needed
        console.log("Data fetched successfully:", data);

        // Redirect after data is loaded successfully
        router.replace(redirectTo); // or router.replace(redirection) if using React Router
      } catch (err) {
        setError(err.message);
        setLoading(false); // Stop the loading animation on error
      }
    }

    loadData();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading data...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return null; // Optionally, you can show something if not redirecting.
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
