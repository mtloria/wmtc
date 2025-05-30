import * as React from 'react';
import NavBar from '../components/navbar';
import TeamLeaderProfile from '../components/team-leader-profile';
import { Box, Modal, Card, CardContent, Tabs, Tab, Typography, Container } from '@mui/material';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import teamLeaders from '../data/team-leaders';
import EliteCard from '../components/elite-card';
import { getImageByName } from '../utils/imageDataParser';
import MemberTable from '../components/member-table';
import EliteStandards from '../components/elite-standards';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../theme';

const MeetTheTeamPage = () => {
  const [selectedLeader, setSelectedLeader] = React.useState(null);
  const [tabIndex, setTabIndex] = React.useState(0);

  const handleOpen = (leader) => {
    setSelectedLeader(leader);
  };

  const handleClose = () => {
    setSelectedLeader(null);
  };

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  React.useEffect(() => {
    // Handle page reload quirks
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.title = 'Meet the Team | WMTC';
  }, []);

  const clubLeaderImageData = useStaticQuery(graphql`
          query {
            allFile(
              filter: { 
                sourceInstanceName: { eq: "images" },
                relativeDirectory: { eq: "leaders" },
                extension: { regex: "/(jpg|jpeg|png|gif)/" }
              }
            ) {
              edges {
                node {
                  relativePath
                  name
                  childImageSharp {
                    gatsbyImageData(
                      width: 1200
                      quality: 100
                      placeholder: BLURRED
                      formats: [AUTO]
                      layout: CONSTRAINED
                    )
                  }
                }
              }
            }
          }
        `);
  const teamLeadersWithImages = teamLeaders.map((leader) => {
    return {
      ...leader,
      image: getImageByName(clubLeaderImageData, leader.image)
    };
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ backgroundColor: 'background.default' }}>
        <NavBar />
        <Container sx={{ maxWidth: '1200px !important' }}>
          <Typography variant="h1" gutterBottom align="center" sx={{ mt: { xs: 4, md: 6 } }}>
            Meet the Team
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
            <Tabs 
              value={tabIndex} 
              onChange={handleTabChange} 
              variant="scrollable" 
              scrollButtons="auto"
              sx={{ '& .MuiTab-root': { minWidth: 'auto', padding: '0 12px' } }}
            >
              <Tab label="Club Leaders" />
              <Tab label="Elite Athletes" />
              <Tab label="Club Members" />
            </Tabs>
          </Box>
          {tabIndex === 0 && (
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
              {teamLeadersWithImages.map((leader) => (
                <Card key={leader.name} onClick={() => handleOpen(leader)} sx={{ cursor: 'pointer', boxShadow: 3, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                  <CardContent>
                    <GatsbyImage image={leader.image} alt={leader.name} style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
                    <p style={{ fontSize: '1.2rem', marginTop: '10px', fontWeight: 'bold' }}>{leader.name}</p>
                  </CardContent>
                </Card>
              ))}
            </Box>
          )}
          {tabIndex === 1 && (
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <EliteStandards />
              <EliteCard />
            </Box>
          )}
          {tabIndex === 2 && (
            <Box>
              <MemberTable />
            </Box>
          )}
          <Modal open={!!selectedLeader} onClose={handleClose}>
            <Box>
              {selectedLeader && <TeamLeaderProfile leader={selectedLeader} onClose={handleClose} />}
            </Box>
          </Modal>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default MeetTheTeamPage;
