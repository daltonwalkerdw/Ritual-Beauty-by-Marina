import React from 'react';
import { Box, Typography } from '@mui/material';
import HeroImg from '../../assets/Minimal_Hero.webp';
import './Hero.css'; 

const HeroImage: React.FC = () => {
    const heroStyles: React.CSSProperties = {
        position: 'relative',
        textAlign: 'center',
        color: 'white',
        backgroundImage: `url(${HeroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '50vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const overlayStyles: React.CSSProperties = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.4)',
        zIndex: 1, 
    };

    return (
        <Box style={heroStyles}>
            <Box style={overlayStyles} />
            <Box style={{ position: 'relative', zIndex: 2 }}>
                <Typography variant="h4" style={{marginBottom: '10px', color: '#FFF7E8',}}>
                    Marina Quiñones
                </Typography>
                <Typography variant="subtitle1" style={{padding: '10px', color: '#FFF7E8',}}>
                    Bridal Makeup Artist & Licensed Esthetician in Orlando, Florida. Crafting timeless beauty for your special day.
                </Typography>
            </Box>
        </Box>
    );
};

export default HeroImage;
