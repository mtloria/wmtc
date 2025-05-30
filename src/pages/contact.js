import * as React from 'react';
import NavBar from '../components/navbar';
import { TextField, Button, Box, Typography, CircularProgress, Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme';
import { StaticImage } from 'gatsby-plugin-image';

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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ backgroundColor: 'background.default' }}>
        <NavBar />
        <Container>
          <Typography variant="h1" gutterBottom align="center" sx={{ mt: { xs: 4, md: 6 } }}>
            Contact Us!
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignItems: 'center', // changed from 'flex-start' to 'center' for vertical centering
              justifyContent: 'center', // already present for horizontal centering
              gap: 6,
              mt: 4,
              mb: 6,
            }}
          >
            <Box sx={{ flex: '0 0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', width: { xs: '100%', md: 740 } }}>
              <StaticImage
                src="../images/Shamrock_Shuffle_2025.jpg"
                alt="Shamrock Shuffle 2025 promotional"
                placeholder="blurred"
                layout="constrained"
                loading="eager"
                style={{ width: '100%', maxWidth: 740, borderRadius: 12, marginBottom: 12, boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}
              />
              <Typography variant="caption" color="text.secondary" sx={{ mb: 2, textAlign: 'center' }}>
                Shamrock Shuffle 2025
              </Typography>
            </Box>
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box
                sx={{
                  width: '100%',
                  maxWidth: 540, // increased from 400 to 540 to better balance with the image
                  background: 'background.paper',
                  boxShadow: 3,
                  borderRadius: 3,
                  p: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
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
                    sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}
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
                      sx={{ minHeight: 48 }}
                    >
                      {isSubmitting ? <CircularProgress size={24} /> : 'Submit'}
                    </Button>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default ContactPage;
