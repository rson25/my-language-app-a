// pages/pronunciation.tsx
import React, { useState } from 'react';
import { Box, Typography, Button, CircularProgress } from '@mui/material';
import NavBar from '../components/NavBar';


const Pronunciation: React.FC = () => {
  const [isRecording, setIsRecording] = useState(false);


  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // Mock recording functionality; integrate with actual audio API in production
  };


  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <NavBar />
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Pronunciation Practice
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Record yourself saying: <strong>"Hola, ¿cómo estás?"</strong>
        </Typography>
        <Button
          variant="contained"
          color={isRecording ? 'error' : 'primary'}
          onClick={toggleRecording}
          startIcon={isRecording ? <CircularProgress size={24} /> : null}
          sx={{ mb: 4 }}
        >
          {isRecording ? 'Stop Recording' : 'Start Recording'}
        </Button>
        <Box sx={{ mt: 4 }}>
          <Typography variant="body2" color="text.secondary">
            Playback and feedback will appear here after recording.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};


export default Pronunciation;