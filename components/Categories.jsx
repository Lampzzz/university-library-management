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
    <View style={{ paddingHorizontal: 5, marginVertical: 10 }}>
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
    marginHorizontal: 5,
    borderRadius: 5,
  },
});

export default Categories;
