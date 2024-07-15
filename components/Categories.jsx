import { Pressable, ScrollView, View, Text, StyleSheet } from "react-native";

const Categories = ({ navigation }) => {
  const categories = [
    "Entertainment",
    "Business",
    "Politics",
    "Health",
    "Technology",
    "Sports",
  ];

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      {categories.map((category, index) => (
        <Pressable
          key={index}
          style={styles.category}
          onPress={() =>
            navigation.navigate("Category", { category: category })
          }
        >
          <Text>{category}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  category: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginRight: 8,
  },
  container: {
    marginVertical: 10,
  },
});

export default Categories;
