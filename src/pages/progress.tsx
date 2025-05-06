// pages/progress.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import NavBar from '../components/NavBar';


const data = [
  { name: 'Week 1', lessons: 3, vocabulary: 20 },
  { name: 'Week 2', lessons: 5, vocabulary: 35 },
  { name: 'Week 3', lessons: 7, vocabulary: 50 },
  { name: 'Week 4', lessons: 10, vocabulary: 70 },
];


const Progress: React.FC = () => {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <NavBar />
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Your Progress
        </Typography>
        <Box sx={{ width: '100%', height: 400, mt: 4 }}>
          <ResponsiveContainer>
            <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="lessons" stroke="#8884d8" name="Lessons Completed" />
              <Line type="monotone" dataKey="vocabulary" stroke="#82ca9d" name="Vocabulary Learned" />
            </LineChart>
          </ResponsiveContainer>
        </Box>
        <Typography variant="body1" sx={{ mt: 4 }}>
          Keep up the good work! You've completed <strong>10 lessons</strong> and learned <strong>70 words</strong>.
        </Typography>
      </Box>
    </Box>
  );
};


export default Progress;