import { View } from "react-native";
import Articles from "../components/Articles";
import Categories from "../components/Categories";

const Trending = ({ navigation }) => {
  return (
    <View style={{ paddingHorizontal: 10 }}>
      <Categories navigation={navigation} />
      <Articles />
    </View>
  );
};

export default Trending;
