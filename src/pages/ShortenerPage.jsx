import React, { useState } from 'react';
import UrlInputForm from '../components/UrlInputForm';
import UrlList from '../components/UrlList';
import { logEvent } from '../utils/logger';

const ShortenerPage = () => {
  const [urls, setUrls] = useState([]);

  const handleShorten = (entries) => {
    const newUrls = entries.map(({ url, validity, shortcode }) => {
      const code = shortcode || Math.random().toString(36).substr(2, 5);
      const now = new Date();
      const expires = new Date(now.getTime() + ((validity || 30) * 60000));
      const result = {
        originalUrl: url,
        shortUrl: `http://localhost:3000/${code}`,
        createdAt: now.toLocaleString(),
        expiresAt: expires.toLocaleString(),
      };
      logEvent("URL Shortened", JSON.stringify(result));
      return result;
    });
    setUrls(newUrls);
  };

  return (
    <div>
      <h2>URL Shortener</h2>
      <UrlInputForm onSubmit={handleShorten} />
      <UrlList urls={urls} />
    </div>
  );
};

export default ShortenerPage;
