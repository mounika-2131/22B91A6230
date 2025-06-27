import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const UrlList = ({ urls }) => (
  <Box>
    {urls.map((u, i) => (
      <Card key={i} sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="h6">Short URL: {u.shortUrl}</Typography>
          <Typography>Original: {u.originalUrl}</Typography>
          <Typography>Created: {u.createdAt}</Typography>
          <Typography>Expires: {u.expiresAt}</Typography>
        </CardContent>
      </Card>
    ))}
  </Box>
);

export default UrlList;
