// components/NavBar.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useRouter } from 'next/router';


const NavBar: React.FC = () => {
  const router = useRouter();


  return (
    <AppBar position="static" sx={{ backgroundColor: '#1976d2' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Language Learner
        </Typography>
        <Box>
          <Button color="inherit" onClick={() => router.push('/')}>Home</Button>
          <Button color="inherit" onClick={() => router.push('/lessons')}>Lessons</Button>
          <Button color="inherit" onClick={() => router.push('/vocabulary')}>Vocabulary</Button>
          <Button color="inherit" onClick={() => router.push('/pronunciation')}>Pronunciation</Button>
          <Button color="inherit" onClick={() => router.push('/progress')}>Progress</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};


export default NavBar;