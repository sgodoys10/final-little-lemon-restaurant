import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import greeksalad from '../../../assets/greeksalad.jpg'
import lemondessert from '../../../assets/lemondessert.jpg'
import restaurantfood from '../../../assets/restaurantfood.jpg'

const StyledCard = styled(Card)({
  maxWidth: 300,
  margin: 'auto',
});

const CardContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between', // Space out the cards
  flexWrap: 'wrap', // Allows wrapping on smaller screens
  gap: '16px', // Gap between cards
  padding: '16px',
});

const MyCard = () => {
  return (
    <>
    <Typography variant='h5'> This Week's Specials</Typography>
    <CardContainer>
    <StyledCard>
      <CardMedia
        component="img"
        height="150"
        image={greeksalad}
        alt="Greek salad image"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Greek Salad
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is a sample description for the card content. It provides a brief overview of the card's content.
        </Typography>
      </CardContent>
      <Button size="small" color="primary">
        Order online
      </Button>
    </StyledCard>
    <StyledCard>
      <CardMedia
        component="img"
        height="150"
        image={lemondessert}
        alt="Lemon dessert image"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Lemon dessert
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is a sample description for the card content. It provides a brief overview of the card's content.
        </Typography>
      </CardContent>
      <Button size="small" color="primary">
        Order online
      </Button>
    </StyledCard>
    <StyledCard>
      <CardMedia
        component="img"
        height="150"
        image={restaurantfood}
        alt="Bruschetta image"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Bruschetta
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This is a sample description for the card content. It provides a brief overview of the card's content.
        </Typography>
      </CardContent>
      <Button size="small" color="primary">
        Order online
      </Button>
    </StyledCard>
    </CardContainer>
    </>
  );
};

export default MyCard;
