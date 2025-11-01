import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import * as React from 'react';
import elites from '../data/elites';
import { getImageByName } from '../utils/imageDataParser';
import { Card, CardContent, Typography, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

const EliteCard = () => {
  const elitesImageData = useStaticQuery(graphql`
    query {
      allFile(
        filter: { 
          sourceInstanceName: { eq: "images" },
          relativeDirectory: { eq: "elites" },
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
  
  const elitesWithImages = elites.map((elite) => {
    return {
      ...elite,
      image: getImageByName(elitesImageData, elite.image)
    };
  });

  return (
    <div>
      <Box display="flex" flexWrap="wrap" justifyContent="space-around">
        {elitesWithImages.map((elite, index) => (
          <Box key={index} m={2} width={300} height={525}>
            <Card style={{ height: '100%', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #ddd' }}>
              <Box style={{ width: '100%', height: 220, overflow: 'hidden', position: 'relative' }}>
                <GatsbyImage
                  image={elite.image}
                  alt={elite.name}
                  style={{ width: '100%', height: '100%' }}
                  imgStyle={{ objectFit: 'cover', objectPosition: 'center top' }}
                />
              </Box>
              <CardContent style={{ flex: '0 1 auto' }}>
                <Typography gutterBottom variant="h4" component="div" color="text.primary">
                  {elite.name}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  {elite.location}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {elite.jobTitle}
                </Typography>
                <Box display="flex" flexDirection="column" alignItems="flex-start" mt={2}>
                  <Typography variant="body1" color="text.primary" style={{ fontWeight: 'bold' }}>
                    PRs:
                  </Typography>
                  <List dense style={{ padding: 0 }}>
                    {elite.prs.map((pr, index) => (
                      <ListItem key={index} style={{ paddingTop: 0, paddingBottom: 0, paddingLeft: 5 }}>
                        <ListItemIcon style={{ minWidth: '30px' }}>
                          <span role="img" aria-label="check">✅</span>
                        </ListItemIcon>
                        <ListItemText primary={pr} style={{ textAlign: 'left' }} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default EliteCard;