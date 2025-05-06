// pages/index.tsx
import React from 'react';
import { Box, Typography, Button, Grid, Card, CardContent, CardActions } from '@mui/material';
import { useRouter } from 'next/router';
import NavBar from '../components/NavBar';

const Home: React.FC = () => {
  const router = useRouter();


  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <NavBar />
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
          Welcome to Language Learner
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 4 }}>
          Master a new language with interactive lessons and tools.
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h5">Lessons</Typography>
                <Typography variant="body2" color="text.secondary">
                  Start learning with interactive lessons.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => router.push('/lessons')}>
                  Go to Lessons
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h5">Vocabulary</Typography>
                <Typography variant="body2" color="text.secondary">
                  Review words with flashcards.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => router.push('/vocabulary')}>
                  Review Now
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h5">Pronunciation</Typography>
                <Typography variant="body2" color="text.secondary">
                  Practice speaking and listening.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => router.push('/pronunciation')}>
                  Practice
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h5">Progress</Typography>
                <Typography variant="body2" color="text.secondary">
                  Track your learning journey.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => router.push('/progress')}>
                  View Progress
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};


export default Home;