import * as React from 'react';
import NavBar from '../components/navbar';
import TeamLeaderCard from '../components/team-leader-card';
import { Box, Modal, Card, CardContent } from '@mui/material';
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const MeetTheTeamPage = () => {
    const [selectedMember, setSelectedMember] = React.useState(null);

    const handleOpen = (member) => {
        setSelectedMember(member);
    };

    const handleClose = () => {
        setSelectedMember(null);
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
                    width: 800
                    quality: 100
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
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
      },
      {
      name: 'Jordan Kyle - Co-Founder, Director, and Athlete',
      image: getImageByName('jordan_kyle'),
      description: 'Jordan grew up in Fishers, Indiana and ran for Hamilton Southeastern High School. He humbly maintains that it was his class that started the excellent distance running the state has seen from the Fishers / Hamilton Southern school districts. Jordan started college at Indiana University and then transferred to the University of Colorado for his last two years. After graduating, he lived and worked in Boulder, CO until 2013, when he moved back to Indiana for law school. He now works for Listrak, a digital marketing technology company based out of Lititz, PA. While he doesn\'t practice law, Jordan maintains his law license. When he\'s not working, training, or maintaining his house, Jordan serves as an executive board member for the Joseph Maley Foundation. Jordan lives in Carmel, IN. with his wife Audrey and daughter Lillian.',
      prs: ['3K: 8:08', '5K: 13:54', '10K: 28:56', 'Half Marathon: 1:04:07', 'Marathon: 2:16:51'],
      accomplishments: ['2 time Olympic Trials Marathon Qualifier (2016 & 2020)', '3 time NCAA Division I All-American', 'Finished within 1 minute of Tom Anderson at the 2017 Drumstick Dash']
      },
      {
      name: 'Conner Sandt - Content Creator and Athlete',
      image: getImageByName('conner_sandt'),
      description: 'Conner is from Middlebury, IN and ran for the Club Cross Country & Track teams at Purdue University. Conner graduated in 2020 and now works as an Electrical Engineer in Royal Oak, MI. Outside of running, Conner has an obvious passion and talent for photography and art. He even designed the WMTC logo!',
      prs: ['5K: 15:14', '8K: 25:12 (XC)', 'Half Marathon: 1:10:13'],
      accomplishments: ['2 x NIRCA All-American (All XC) from 2018 - 2019', 'Only complained about every other workout last year']
      },
      {
      name: 'Abbey Warth - Social Media Coordinator and Athlete',
      image: getImageByName('abby_warth'),
      description: 'Abbey is from Massillon, OH and was part of the track and cross country teams at Ohio Wesleyan University, graduating in 2016. In 2018, Abbey moved to Florida where she attended PA school, briefly worked as a PA in Physical Medicine, and sweated more than she ever has in her entire life. Abbey relocated to Indianapolis in 2021 where she currently works as an Internal Medicine PA at St Vincent Hospital.',
      prs: ['800m: 2:12', '1500m: 4:29', '5K: 17:58', '10K: 36:16', 'Half Marathon: 1:22:40'],
      accomplishments: ['5x NCAA Division 3 qualifier in the 1500m and mile indoor/outdoor track (2014-2016)', 'Division 3 All-American in the 1500m (2015)']
      },
      {
      name: 'Max Runningen - Social Media Coordinator and Athlete',
      image: getImageByName('max_runningen'),
      description: 'Max is from Noblesville, IN and ran for the Club Cross Country & Track teams at Purdue University. Max graduated in 2020 and now works as civil engineer at Christopher B. Burke Engineering in Indianapolis. Outside of running on the roads, Max enjoys twisting his ankle while trail running.',
      prs: ['5K: 15:27', '10K: 33:11', 'Half Marathon: 1:10:56', 'Marathon: 2:34:12'],
      accomplishments: ['2018 NIRCA All-American (Track)', 'The Indiana Pacers went undefeated (1-0) while Max was their team captain in 2019']
      },
      {
      name: 'Lucy Dobbs - Team Captain and Athlete',
      image: getImageByName('lucy_dobbs'),
      description: 'Lucy lives in Indianapolis, Indiana and works as an associate Actuary with OneAmerica. She ran for the club Cross Country and Track teams at Purdue University, where she was an All-American as well as a National Champion in the 5K on the track.',
      prs: ['5K: 17:02', '10K: 34:48', 'Half Marathon: 1:16:56', 'Marathon: 2:36:33'],
      accomplishments: ['2019 NIRCA National Champion (Track 5K)', '2024 Olympic Marathon Trials Qualifier']
      },
    ];

    return (
        <Box sx={{ backgroundColor: 'background.default' }}>
            <NavBar />
            <Box sx={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center', flexGrow: 1 }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Meet the Team</h1>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
                    {teamMembers.map((member) => (
                        <Card key={member.name} onClick={() => handleOpen(member)} sx={{ cursor: 'pointer', boxShadow: 3, transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' } }}>
                            <CardContent>
                                <GatsbyImage image={member.image} alt={member.name} style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
                                <p style={{ fontSize: '1.2rem', marginTop: '10px', fontWeight: 'bold' }}>{member.name}</p>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
                <Modal open={!!selectedMember} onClose={handleClose}>
                    <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', maxWidth: '600px', bgcolor: 'background.paper', boxShadow: 24, p: 4 }}>
                        {selectedMember && <TeamLeaderCard member={selectedMember} onClose={handleClose} />}
                    </Box>
                </Modal>
            </Box>
        </Box>
    );
}

export default MeetTheTeamPage;
