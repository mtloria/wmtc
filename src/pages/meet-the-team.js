import * as React from 'react';
import NavBar from '../components/navbar';
import TeamLeaderProfile from '../components/team-leader-profile';
import { Box, Modal, Card, CardContent, Tabs, Tab } from '@mui/material';
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import teamLeaders from '../data/team-leaders';

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

    const imageData = useStaticQuery(graphql`
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
      
    const getImageByName = (name) => {
        const imageNode = imageData.allFile.edges.find(({ node }) => node.name === name);
        return imageNode ? getImage(imageNode.node.childImageSharp.gatsbyImageData) : null;
    };

    const teamLeadersWithImages = teamLeaders.map((leader) => {
        return {
            ...leader,
            image: getImageByName(leader.image)
        };
    });

    return (
        <Box sx={{ backgroundColor: 'background.default' }}>
            <NavBar />
            <Box sx={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', flexGrow: 1 }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Meet the Team</h1>
                <Tabs value={tabIndex} onChange={handleTabChange} centered>
                    <Tab label="Club Leaders" />
                    <Tab label="Elite Athletes" />
                    <Tab label="Club Members" />
                </Tabs>
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
                    <Box>
                        <p>Elite Athletes content goes here.</p>
                    </Box>
                )}
                {tabIndex === 2 && (
                    <Box>
                        <p>Club Members content goes here.</p>
                    </Box>
                )}
                <Modal open={!!selectedLeader} onClose={handleClose}>
                  <Box>
                    {selectedLeader && <TeamLeaderProfile leader={selectedLeader} onClose={handleClose} />}
                  </Box>
                </Modal>
            </Box>
        </Box>
    );
}

export default MeetTheTeamPage;
