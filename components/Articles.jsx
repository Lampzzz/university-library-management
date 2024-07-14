import { ScrollView, View } from "react-native";
import newsServices from "../services/newsServices";

const Articles = () => {
  const [articles, isLoading, error] = newsServices();

  return (
    <ScrollView>
      {articles.map((article, index) => (
        <View></View>
      ))}
    </ScrollView>
  );
};

export default Articles;
