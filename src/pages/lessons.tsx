// pages/lessons.tsx
import React, { useState } from 'react';
import { Box, Typography, Button, List, ListItem, ListItemText, Divider } from '@mui/material';
import NavBar from '../components/NavBar';


const lessons = [
  { id: 1, title: 'Greetings', description: 'Learn basic greetings and introductions.' },
  { id: 2, title: 'Numbers', description: 'Master counting and numbers.' },
  { id: 3, title: 'Daily Activities', description: 'Talk about your routine.' },
];


const Lessons: React.FC = () => {
  const [selectedLesson, setSelectedLesson] = useState<number | null>(null);


  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <NavBar />
      <Box sx={{ p: 4 }}>
        <Typography variant="h4" gutterBottom align="center">
          Interactive Lessons
        </Typography>
        <List sx={{ maxWidth: 600, margin: '0 auto', backgroundColor: '#fff', borderRadius: 2, boxShadow: 3 }}>
          {lessons.map((lesson) => (
            <React.Fragment key={lesson.id}>
              <ListItem
                onClick={() => setSelectedLesson(lesson.id)}
                sx={{ cursor: 'pointer', backgroundColor: selectedLesson === lesson.id ? '#e3f2fd' : 'transparent' }}
              >
                <ListItemText primary={lesson.title} secondary={lesson.description} />
                <Button variant="outlined" size="small">
                  Start
                </Button>
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
        {selectedLesson && (
          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Typography variant="h6">
              Lesson Content for: {lessons.find((l) => l.id === selectedLesson)?.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Placeholder for lesson content (text, audio, quizzes).
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};


export default Lessons;