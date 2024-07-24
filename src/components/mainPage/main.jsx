import React, { useEffect, useState } from 'react'
import getNews from '../../services/routes';
import News from './news';
import "./main.css"

export default function Main({news}) {
  const [newsData, setNewsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (news.length > 0) {
      setNewsData(news);
    } else {
      getNews().then(data => {
        setNewsData(data);
      });
    }
  }, [news]);

  
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredNews = newsData.filter(article => {
    const title = article.title ? article.title.toLowerCase() : '';
    const description = article.description ? article.description.toLowerCase() : '';
    return (
      title.includes(searchQuery.toLowerCase()) ||
      description.includes(searchQuery.toLowerCase())
    );
  });


  return (
    <div>
    <input
      type="text"
      placeholder="Знайти новину..."
      value={searchQuery}
      onChange={handleSearch}
      className='searchInput'
    />
    {filteredNews.length > 0 ? (
      filteredNews.map((article, index) => (
        <News key={index} article={article} />
      ))
    ) : (
      <div>За вашим запитом новин не знайдено </div>
    )}
  </div>
  )
}


