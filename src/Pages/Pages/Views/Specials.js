import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { styled, ThemeProvider } from '@mui/material/styles';
import greeksalad from '../../../assets/greeksalad.jpg'
import lemondessert from '../../../assets/lemondessert.jpg'
import restaurantfood from '../../../assets/restaurantfood.jpg'
import theme from '../../../Components/Themes';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import OnlineMenuButton from '../../../Components/OnlineMenuButton';

const StyledCard = styled(Card)({
  maxWidth: 300,
  margin: 'auto',
  borderRadius: '8pt',
  display: 'flex',
  flexDirection: 'column', 
  height: '100%',
  minHeight: '350px'
});

const CardContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between', // Space out the cards
  flexWrap: 'wrap', // Allows wrapping on smaller screens
  gap: '16px', // Gap between cards
  padding: '16px',
  marginBottom: '-10px'
});

const HeaderAndPriceWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
});

const ButtonWrapper = styled(Box)({
  display:'flex', 
  justifyContent: 'center',
  marginTop: 'auto', 
});

const MyCard = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
    <Box
      sx={{
        display: 'flex', 
        justifyContent: 'space-between',
        marginBottom: '15px'
      }}
    >
    <Typography variant='h5' color="text.primary"> This Week's Specials</Typography>
    <OnlineMenuButton/>
    </Box>
    <CardContainer>
    <StyledCard>
      <CardMedia
        component="img"
        height="150"
        image={greeksalad}
        alt="Greek salad"
      />
      <CardContent>
        <HeaderAndPriceWrapper>
          <Typography gutterBottom variant="h6" component="div">
            Greek Salad
          </Typography>
          <Typography variant='h6' color="other.primary">
            $12.99
          </Typography>
        </HeaderAndPriceWrapper>
        <Typography variant="body2" color="text.primary">
        The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
        </Typography>
      </CardContent>
      <ButtonWrapper>
        <Button size="small" color="primary" endIcon={<DeliveryDiningIcon/>}>
          Order online
        </Button>
      </ButtonWrapper>
    </StyledCard>
    <StyledCard>
      <CardMedia
        component="img"
        height="150"
        image={restaurantfood}
        alt="Bruschetta"
      />
      <CardContent>
        <HeaderAndPriceWrapper>
          <Typography gutterBottom variant="h6" component="div">
            Bruschetta
          </Typography>
          <Typography variant='h6' color="other.primary">
            $5.99
          </Typography>
        </HeaderAndPriceWrapper>
        <Typography variant="body2" color="text.primary">
        Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
        </Typography>
      </CardContent>
      <ButtonWrapper>
        <Button size="small" color="primary" endIcon={<DeliveryDiningIcon/>}>
          Order online
        </Button>
      </ButtonWrapper>
    </StyledCard>
    <StyledCard>
      <CardMedia
        component="img"
        height="150"
        image={lemondessert}
        alt="Lemon dessert"
      />
      <CardContent>
        <HeaderAndPriceWrapper>
          <Typography gutterBottom variant="h6" component="div">
            Lemon dessert
          </Typography>
          <Typography variant='h6' color='other.primary'>
            $4.99
          </Typography>
        </HeaderAndPriceWrapper>
        <Typography variant="body2" color="text.primary">
        This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
        </Typography>
      </CardContent>
      <ButtonWrapper>
        <Button size="small" color="primary" endIcon={<DeliveryDiningIcon/>}>
          Order online
        </Button>
      </ButtonWrapper>
    </StyledCard>
    </CardContainer>
    </ThemeProvider>
    </>
  );
};

export default MyCard;
