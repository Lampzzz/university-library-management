import axios from "axios";
import { useEffect, useState } from "react";

const newsServices = () => {
  const API_KEY = "18d913b1f0c245e7bf33129f14c4aa6f";
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`
      );

      setArticles(response.data.articles);
    } catch (err) {
      console.log(err.message);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return [articles, isLoading, error];
};

export default newsServices;
