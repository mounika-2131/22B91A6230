import React, { useState } from 'react';
import './styles.css';

function App() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [isDark, setIsDark] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fakeShortUrl = `https://short.ly/${Math.random().toString(36).substr(2, 6)}`;
    setShortUrl(fakeShortUrl);
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`background ${isDark ? 'dark' : 'light'}`}>
      <div className={`card ${isDark ? 'card-dark' : 'card-light'}`}>
        <div className="theme-toggle" onClick={toggleTheme}>
          {isDark ? '🌙' : '☀️'}
        </div>
        <h1 className="title">🔗 Smart URL Shortener</h1>
        <p className="subtitle">Trim long links into sleek, shareable ones!</p>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="url"
            placeholder="Paste a long URL..."
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            required
            className="input"
          />
          <button type="submit" className="btn">Generate Link</button>
        </form>
        {shortUrl && (
          <div className="result">
            <p>Your Short Link:</p>
            <a href={shortUrl} target="_blank" rel="noopener noreferrer" className="short-url">
              {shortUrl}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
