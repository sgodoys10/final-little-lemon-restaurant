import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import testimonial1 from '../assets/testimonial1.jpg'
import testimonial2 from '../assets/testimonial2.jpg'
import testimonial3 from '../assets/testimonial3.jpg'
import testimonial4 from '../assets/testimonial4.jpg'
import { Star, StarBorder } from '@mui/icons-material';

const CarouselContainer = styled('div')({
    position: 'relative',
    width: '500px', // Width of the carousel
    margin: '0 auto', // Center the carousel horizontally
    overflow: 'hidden',
});

const ImgContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    transition: 'transform 0.5s ease-in-out',
    justifyContent: 'center',
    height: '275px', // Height of the carousel
    backgroundColor: 'hsl(50, 28%, 70%)', // Background color inside the carousel
    filter: 'brightness(-1)',
    borderRadius: '8pt'
  });

  const ProfileImage = styled('img')({
    width: '90px',
    height: '90px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '3px solid #ddd', // Optional: border around the profile image
  });

  const ReviewText = styled(Typography)({
    textAlign: 'center',
    margin: '40px',
  });

  const StarRating = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '15px', 
  });

const Button = styled('button')({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgba(0,0,0,0.5)',
  color: 'white',
  border: 'none',
  padding: '10px',
  cursor: 'pointer',
});

const TestimonalCards = () => {
  const [idx, setIdx] = useState(0);

  const testimonials = [
    {
      image: testimonial1,
      review: "The food was amazing! Highly recommend trying the lemon dessert.",
      rating: 5
    },
    {
      image: testimonial2,
      review: "A wonderful dining experience. The Greek salad was delicious.",
      rating: 4
    },
    {
      image: testimonial3,
      review: "I love the Bruschetta from the Little Lemon!",
      rating: 5
    },
    {
      image: testimonial4,
      review: "I suggest asking for Samuel as your server. He was fun and knowledgeable.",
      rating: 5
    }
  ];
  const handleNext = () => {
    setIdx((prevIdx) => (prevIdx + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIdx((prevIdx) => (prevIdx - 1 + testimonials.length) % testimonials.length);
  };


  return (
    <CarouselContainer>
        <ImgContainer>
            <ProfileImage src={testimonials[idx].image} alt={`Reviewer ${idx}`}/>
            <ReviewText variant='body1'>{testimonials[idx].review}</ReviewText>
            <StarRating>
                {[...Array(5)].map((_, i) => (
                i < testimonials[idx].rating ? <Star key={i} /> : <StarBorder key={i} />
                ))}
            </StarRating>
        </ImgContainer>
        <Button style={{ left: '10px' }} onClick={handlePrev}>‹</Button>
        <Button style={{ right: '10px' }} onClick={handleNext}>›</Button>
    </CarouselContainer>
  );
};

export default TestimonalCards;
