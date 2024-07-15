import axios from "axios";
import { useEffect, useState } from "react";
import { API_KEY, COUNTRY } from "../data";

const newsServices = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=${COUNTRY}&apiKey=${API_KEY}`
      );

      setArticles(response.data.articles);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return [articles, isLoading, error];
};

export default newsServices;
