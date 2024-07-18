import Carousel from 'react-material-ui-carousel';
import { Paper, Typography } from '@mui/material'
const images = ['./net.jpg', 'blue.jpg', 'network.jpg'];
const carouselItemStyle = {
    height: '400px', // Adjust the height as needed
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
    backgroundPosition: 'center',
    position: 'relative',
    overflow: 'hidden',
};

const captionStyle = {
    position: 'absolute',
    bottom: '16px',
    left: '16px',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: '8px',
};
 export const Home = () => {
    return (
        <Carousel autoPlay={true}
        animation="slide"
        timeout={50000} >
            {images.map((image, index) => (
                <Paper
                    key={index}
                    sx={{
                        ...carouselItemStyle,
                        backgroundImage: `url(${image})`,
                    }}
                >
                    <Typography variant="h5" sx={captionStyle}>
                        Telecom Network {index + 1}
                    </Typography>
                </Paper>
            ))}
        </Carousel>

    )
}