import React from 'react';
import { Box, Typography } from '@mui/material';
import HeroImg from '../../assets/Minimal_Hero.webp';
import './Hero.css'; // Import the CSS file for styles

const HeroImage: React.FC = () => {
    const heroStyles: React.CSSProperties = {
        position: 'relative',
        textAlign: 'center',
        color: 'white',
        backgroundImage: `url(${HeroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '50vh', // Adjust the height as needed
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    };

    // Ensure that the overlay does not interfere with the flexbox centering
    const overlayStyles: React.CSSProperties = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.6)', // Adjust the dark overlay opacity here
        zIndex: 1, // Ensure overlay is behind the text
    };

    return (
        <Box style={heroStyles}>
            {/* Overlay for darkening effect */}
            <Box style={overlayStyles} />
            {/* Content container to ensure text is above the overlay */}
            <Box style={{ position: 'relative', zIndex: 2 }}>
                <Typography variant="h4" style={{marginBottom: '10px', color: '#C9A678'}}>
                    Marina Quiñones
                </Typography>
                <Typography variant="subtitle1" style={{padding: '10px', color: '#FFF7E8'}}>
                    Bridal Makeup Artist & Licensed Esthetician in Orlando, Florida. Crafting timeless beauty for your special day.
                </Typography>
            </Box>
        </Box>
    );
};

export default HeroImage;
