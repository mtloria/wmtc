import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Card, CardContent } from '@mui/material';

const TeamLeaderCard = ({ member }) => {
    return (
        <Card sx={{ textAlign: 'left', padding: '20px' }}>
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
    )
}

export default TeamLeaderCard;