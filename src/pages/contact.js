import * as React from 'react';
import NavBar from '../components/navbar';
import { TextField, Button, Box, Typography, CircularProgress } from '@mui/material';

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  React.useEffect(() => {
    // Handle page reload quirks
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.title = 'Contact | WMTC';
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.target;
    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          setIsSubmitted(true);
          form.reset();
        }
      })
      .catch((error) => {
        console.error('Form submission error:', error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <Box sx={{ backgroundColor: 'background.default' }}>
      <NavBar />
      <Box sx={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', flexGrow: 1 }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Contact Us</h1>
        {isSubmitted ? (
          <Typography variant="h6" color="success.main" textAlign="center">
            Thank you! Your message has been sent successfully.
          </Typography>
        ) : (
          <Box 
            component="form" 
            action="https://api.web3forms.com/submit" 
            method="POST"
            onSubmit={handleSubmit}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400, margin: '0 auto' }}
            noValidate 
            autoComplete="off"
          >
            {/* flatball.manager@gmail test account */}
            {/* <input type="hidden" name="access_key" value="bff71d1d-a864-4d22-8f6d-281e0368ca8c" /> */}

            <input type="hidden" name="access_key" value="b86b278a-0c15-446c-a5b2-78cdf6881974" />
            
            <TextField name="name" label="Name" variant="outlined" fullWidth required />
            <TextField name="email" label="Email" type="email" variant="outlined" fullWidth required />
            <TextField 
              name="message" 
              label="Message" 
              variant="outlined" 
              multiline 
              rows={4} 
              fullWidth 
              required 
            />
            <Button 
              variant="contained" 
              color="primary" 
              type="submit" 
              disabled={isSubmitting}
            >
              {isSubmitting ? <CircularProgress size={24} /> : 'Submit'}
            </Button>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ContactPage;
