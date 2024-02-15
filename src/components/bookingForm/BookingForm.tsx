import React, { useState } from 'react';
import './BookingForm.css'
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    message: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const recipientEmail = 'ritualbeautybymarina@gmail.com';
  
    const mailtoLink = `mailto:${recipientEmail}?subject=${formData.name} Booking Inquiry&body=${
      encodeURIComponent(
        `Name: ${formData.name}\n` +
        '\n' +
        `Email: ${formData.email}\n` +
        '\n' +
        `Preferred Date: ${formData.date}\n` +
        '\n' +
        `Message: ${formData.message}`
      )
    }`;
  
    window.location.href = mailtoLink;
  
    setFormData({ name: '', email: '', date: '', message: '' });
  };
  

  return (
    <div className='background'>

    <Container maxWidth="sm" id='booking' className='form-container'>
      <Typography variant="h3" gutterBottom className='section-title'>
        Booking Inquiry
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate autoComplete="off">
        <TextField 
          fullWidth 
          label="Name" 
          variant="outlined" 
          name="name" 
          value={formData.name}
          onChange={handleChange} 
          margin="normal"
        />
        <TextField 
          fullWidth 
          label="Email" 
          variant="outlined" 
          name="email" 
          value={formData.email}
          onChange={handleChange} 
          margin="normal"
        />
        <TextField 
          fullWidth 
          label="Preferred Date" 
          variant="outlined" 
          name="date" 
          type="date"
          InputLabelProps={{ shrink: true }}
          value={formData.date}
          onChange={handleChange} 
          margin="normal"
        />
        <TextField 
          fullWidth 
          label="Message" 
          variant="outlined" 
          name="message" 
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange} 
          margin="normal"
        />
        <div className="form-button-container">
        <Button variant="contained" type="submit" >
          Send Inquiry
        </Button>
        </div>
      </Box>
    </Container>
    </div>
  );
};

export default BookingForm;
