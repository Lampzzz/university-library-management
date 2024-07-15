import { useEffect } from "react";
import { Text } from "react-native";

const GetCategory = ({ navigation, route }) => {
  const category = route.params.category;

  useEffect(() => {
    navigation.setOptions({ title: category });
  }, [category]);

  return <Text>GetCategory</Text>;
};

export default GetCategory;
