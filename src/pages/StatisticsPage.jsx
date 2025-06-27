import React, { useEffect, useState } from 'react';
import UrlStats from '../components/UrlStats';

const StatisticsPage = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    const dummy = [{
      shortUrl: "http://localhost:3000/test",
      clicks: [
        { timestamp: "2025-06-27 10:00", source: "Facebook", location: "India" },
        { timestamp: "2025-06-27 11:00", source: "Twitter", location: "US" }
      ]
    }];
    setStats(dummy);
  }, []);

  return (
    <div>
      <h2>Shortened URL Statistics</h2>
      <UrlStats stats={stats} />
    </div>
  );
};

export default StatisticsPage;
