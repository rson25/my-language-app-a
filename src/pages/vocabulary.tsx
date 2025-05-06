// pages/vocabulary.tsx
import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import NavBar from '../components/NavBar';


interface Flashcard {
  id: number;
  word: string;
  translation: string;
}


const flashcards: Flashcard[] = [
  { id: 1, word: 'Hello', translation: 'Hola' },
  { id: 2, word: 'Thank you', translation: 'Gracias' },
  { id: 3, word: 'Goodbye', translation: 'Adiós' },
];


const Vocabulary: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);


  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % flashcards.length);
  };


  const handleFlip = () => setIsFlipped(!isFlipped);


  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5' }}>
      <NavBar />
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>
          Vocabulary Review
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentIndex}-${isFlipped}`}
              initial={{ opacity: 0, rotateY: 180 }}
              animate={{ opacity: 1, rotateY: 0 }}
              exit={{ opacity: 0, rotateY: -180 }}
              transition={{ duration: 0.5 }}
              style={{
                width: '300px',
                height: '200px',
                backgroundColor: '#fff',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                cursor: 'pointer',
              }}
              onClick={handleFlip}
            >
              <Typography variant="h6">
                {isFlipped ? flashcards[currentIndex].translation : flashcards[currentIndex].word}
              </Typography>
            </motion.div>
          </AnimatePresence>
        </Box>
        <Button variant="contained" onClick={handleNext} sx={{ mt: 4 }}>
          Next Card
        </Button>
      </Box>
    </Box>
  );
};


export default Vocabulary;