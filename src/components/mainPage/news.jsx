import React, { useState, useEffect } from 'react'
import "./news.css"
import { FaArrowCircleRight, FaBookmark, FaRegBookmark } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function News({ article }) {
  console.log(article);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    const savedArticles = JSON.parse(localStorage.getItem('savedArticles')) || [];
    const articleSaved = savedArticles.some(savedArticle => savedArticle.url === article.url);
    setIsSaved(articleSaved);
  }, [article.url]);

  const handleSaveArticle = () => {
    const savedArticles = JSON.parse(localStorage.getItem('savedArticles')) || [];
    if (isSaved) {
      const updatedArticles = savedArticles.filter(savedArticle => savedArticle.url !== article.url);
      localStorage.setItem('savedArticles', JSON.stringify(updatedArticles));
      setIsSaved(false);
    } else {
      savedArticles.push(article);
      localStorage.setItem('savedArticles', JSON.stringify(savedArticles));
      setIsSaved(true);
    }
  };

  return (
<div className='newsArticle'>
      {article.urlToImage && <img src={article.urlToImage} alt={article.title} className='newsImage' />}
      <div className='blockNews'>
        <h2>{article.title}</h2>
        <p>{article.description}</p>
        <div className='actions'>
          <button onClick={handleSaveArticle} className='saveButton'>
            {isSaved ? <FaBookmark /> : <FaRegBookmark />}
          </button>
          <Link target='_blank' to={article.url} className='newsLink'>
            <FaArrowCircleRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
