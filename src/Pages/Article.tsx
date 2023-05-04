import "../App.scss";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import striptags from "striptags";

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  content: string;
  publishedAt: string;
}

export const Article = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article>();

  useEffect(() => {
    const fetchArticle = async () => {
      const result = await axios.get(
        `https://newsapi.org/v2/everything?q=${id}&apiKey=20b119f3f1524e8e9699bbd046df6482`
      );
      setArticle(result.data.articles[0]);
      console.log(result.data.articles[0]);
    };
    fetchArticle();
  }, [id]);

  if (!article) return <div>Loading...</div>;

  return (
    <div className="article">
      <h1>{article.title}</h1>
      <img src={article.urlToImage} alt={article.title} />

      <div className="articleContent">
        <p>{striptags(article.description)}</p>
        <p>{striptags(article.content)}</p>
      </div>
    </div>
  );
};
