import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const UrlStats = ({ stats }) => (
  <Box>
    {stats.map((s, i) => (
      <Card key={i} sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h6">{s.shortUrl}</Typography>
          <Typography>Total Clicks: {s.clicks.length}</Typography>
          {s.clicks.map((c, j) => (
            <Box key={j} sx={{ mt: 1 }}>
              <Typography>Time: {c.timestamp}</Typography>
              <Typography>Source: {c.source}</Typography>
              <Typography>Location: {c.location}</Typography>
            </Box>
          ))}
        </CardContent>
      </Card>
    ))}
  </Box>
);

export default UrlStats;
