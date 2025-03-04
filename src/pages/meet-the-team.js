import * as React from 'react';
import NavBar from '../components/navbar';
import { Box, Card, CardContent } from '@mui/material';
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const MeetTheTeamPage = () => {
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
                    width: 800
                    quality: 90
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
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

    const teamMembers = [
        {
            name: 'Caleb Kerr - Co-Founder, Director, and Athlete',
            image: getImageByName('caleb_kerr'),
            description: 'Caleb is from Evansville, IN and ran for Purdue University from 2012 - 2016. He currently works as an Associate Director for Eli Lilly in Indianapolis. During his time at Purdue, specifically his Senior year, Caleb battled through severe achilles pain that progressively slowed him down until he graduated. After graduation, several months away from running, and two achilles surgeries, Caleb rejuvenated his running career while training in Indianapolis around his work hours. Caleb now lives in Zionsville, IN with his wife (and Purdue school record-holder in the mile) Katie Kerr.',
            prs: ['5K: 14:16', '10K: 29:04', 'Half Marathon: 1:04:36', 'Marathon: 2:14:50'],
            accomplishments: ['2x Olympic Marathon Trials Qualifier (2020 & 2024)', 'USATF Indiana Long Distance Athlete of the Year (2018)', 'Has only been dropped by his wife in a workout once']
        },
        {
            name: 'David Evans - President, Coach, and Athlete',
            image: getImageByName('david_evans'),
            description: 'David is from Westfield, IN and ran for the Club Cross Country & Track teams at Purdue University. David then coached said club teams from 2017 - 2020 until he moved to Michigan in support of his superstar wife, who is now a resident at the University of Michigan. He now works remotely as a Project Manager at Southwire Company.',
            prs: ['5K: 14:57', '8K: 24:42', 'Half Marathon: 1:08:46'],
            accomplishments: ['3 x NIRCA All American (2 x Track, 1 x XC) from 2015 - 2016', 'Coached Purdue to 2nd place at NIRCA XC National Championships for men (2019) and women (2018)', 'Married so high up he had to take the elevator']
        }
    ];

    return (
        <Box sx={{ backgroundColor: '#f9f9f9' }}>
            <NavBar />
            <Box sx={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', flexGrow: 1 }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Meet the Team</h1>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                    {teamMembers.map((member, index) => (
                        <Card key={index} sx={{ textAlign: 'left', padding: '20px' }}>
                            <CardContent>
                                <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>{member.name}</h2>
                                <GatsbyImage image={member.image} alt={member.name} style={{ width: '200px', height: 'auto', borderRadius: '50%', marginBottom: '20px' }} />
                                <p style={{ fontSize: '1rem', lineHeight: '1.6', marginBottom: '20px' }}>{member.description}</p>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>PRs:</h3>
                                <ul style={{ listStyleType: 'none', padding: '0', marginBottom: '20px' }}>
                                    {member.prs.map((pr, index) => (
                                        <li key={index} style={{ fontSize: '1rem', lineHeight: '1.6' }}>{pr}</li>
                                    ))}
                                </ul>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>Other Accomplishments:</h3>
                                <ul style={{ listStyleType: 'none', padding: '0' }}>
                                    {member.accomplishments.map((accomplishment, index) => (
                                        <li key={index} style={{ fontSize: '1rem', lineHeight: '1.6' }}>{accomplishment}</li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}

export default MeetTheTeamPage;
