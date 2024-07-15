import { Text, View } from "react-native";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Articles from "../components/Articles";

const Trending = () => {
  return (
    <View style={{ paddingHorizontal: 10 }}>
      <Categories />
      <Articles />
    </View>
  );
};

export default Trending;
