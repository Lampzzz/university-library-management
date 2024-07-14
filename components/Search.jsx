import { TextInput, View, StyleSheet } from "react-native";

const Search = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Search" style={styles.input} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  input: {
    borderWidth: 1,
    marginVertical: 10,
    padding: 5,
    borderRadius: 5,
  },
});

export default Search;
