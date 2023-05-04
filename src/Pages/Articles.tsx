import "../App.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Article {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  content: string;
  publishedAt: string;
}

export const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredArticles = articles.filter(
    (article) =>
      (article.title &&
        article.title.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (article.content &&
        article.content.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  useEffect(() => {
    const fetchArticles = async () => {
      const result = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=20b119f3f1524e8e9699bbd046df6482"
      );
      setArticles(result.data.articles);
    };
    fetchArticles();
  }, []);

  return (
    <div className="App">
      <h1>Articles</h1>

      <input
        type="text"
        placeholder="Browse"
        value={searchTerm}
        onChange={handleSearch}
      />

      {filteredArticles.map((article) => (
        <Link
          to={`/article/${article.title}`}
          className="card"
          style={{ textDecoration: "none" }}
        >
          <div className="cardFrame">
            <img src={article.urlToImage} alt={article.title} />
          </div>

          <div className="cardText">
            <h2>{article.title}</h2>
            <p>{new Date(article.publishedAt).toLocaleString()}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
