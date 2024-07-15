import { Pressable, ScrollView, View, Text, StyleSheet } from "react-native";

const Categories = () => {
  const categories = [
    "Entertainment",
    "Business",
    "Politics",
    "Health",
    "Technology",
    "Sports",
  ];

  return (
    <View style={{ marginVertical: 5 }}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => (
          <Pressable key={index} style={styles.category}>
            <View>
              <Text>{category}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  category: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: "white",
    marginEnd: 5,
    borderRadius: 5,
  },
});

export default Categories;
