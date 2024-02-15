import React from 'react';
import { Card, CardContent, Typography, List, ListItem, ListItemText, Grid } from '@mui/material';
import './Service.css'

interface Service {
    title: string;
    description?: string;
    price: string;
    duration?: string; // Optional because some services don't have a specified duration
}


const services: Service[] = [
    {
        title: 'Bridal Trial Makeup',
        price: '$185',
        duration: '120 minutes',
        description: 'Booking a makeup trial is so important because it allows for us to chat one on one about your unique bridal glam so we can achieve the perfect look for your special day.'
    },
    {
        title: 'Photoshoot or Special Events Makeup',
        price: '$185',
        duration: 'Varies',
        description: 'Perfect for any special event or photoshoot.'
    },
    {
        title: 'Bridal Makeup',
        price: '$185',
        duration: '90 Minutes',
        description: 'Lashes included if wanted.'
    },
    {
        title: 'Bridal Party Makeup',
        price: '$120',
        duration: '60 minutes',
        description: 'For the entire bridal party.'
    },
    {
        title: 'Junior Bridesmaid Makeup',
        price: '$95',
        duration: '30 minutes',
        description: 'Includes foundation, blush, two eyeshadows, mascara, and lip product of choice.'
    },
    {
        title: 'Flower Girl Makeup',
        price: '$35',
        duration: 'Short',
        description: 'Includes one eyeshadow, blush, and lip product of choice.'
    },
    {
        title: 'False Lashes',
        price: 'Strip Lashes - $10, Individual Lashes - $15',
        duration: 'At Event',
        description: 'Size and style options available on the day of the event.'
    },
    {
        title: 'Groom Makeup',
        price: 'Spot coverage - $40, Full coverage - $60',
        duration: 'Varies',
        description: 'Groom makeup services.'
    }
];



const ServicesSection: React.FC = () => {
    return (
        <div className='mobile-padding'>
            <Typography variant="h3" gutterBottom className='section-title' id="service-menu">
                Service Menu
            </Typography>
            <Grid container spacing={2} style={{ display: 'flex', alignItems: 'stretch' }}>
                {services.map((service, index) => (
                    <Grid item xs={12} md={6} key={index} style={{ display: 'flex' }}>
                        <Card sx={{ width: '100%', display: 'flex', flexDirection: 'column', background: '#FFF7E8' }}>
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography variant="h5" component="div" sx={{ color: '#6E4555' }}>
                                    {service.title}
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    {service.price} - {service.duration}
                                </Typography>
                                <Typography variant="body2">
                                    {service.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default ServicesSection;
