import React from "react";
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import newsServices from "../services/newsServices";

const { width } = Dimensions.get("window");

const Articles = () => {
  const [articles, isLoading, error] = newsServices();

  const renderArticle = ({ item }) => {
    return (
      <View style={styles.articleContainer}>
        <View style={styles.article}>
          <Image
            style={styles.image}
            source={{
              uri: item.urlToImage,
            }}
          />
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </View>
    );
  };

  return (
    <>
      {isLoading && (
        <View style={styles.centerScreen}>
          <ActivityIndicator color="blue" size="large" />
        </View>
      )}
      {!isLoading && error && (
        <View style={styles.centerScreen}>
          <Text>{error}</Text>
        </View>
      )}
      {!isLoading && !error && articles.length === 0 ? (
        <View style={styles.centerScreen}>
          <Text>No news found</Text>
        </View>
      ) : (
        <FlatList
          data={articles}
          renderItem={renderArticle}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  articleContainer: {
    width: width,
  },
  article: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    padding: 5,
    marginVertical: 5,
    elevation: 2,
    borderRadius: 5,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 5,
  },
  title: {
    flex: 1,
    fontSize: 12,
  },
});

export default Articles;
