import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { CardContent, Box, IconButton, Typography, List, ListItem } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    maxHeight: '90%',
    overflowY: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: '10px',
    outline: 'none',
};

const TeamLeaderCard = ({ member, onClose }) => {
    return (
        <Box sx={modalStyle}>
            <IconButton onClick={onClose} sx={{ position: 'absolute', top: 8, right: 8 }}>
                <CloseIcon />
            </IconButton>
            <CardContent>
                <Typography variant="h4" component="h2" gutterBottom>
                    {member.name}
                </Typography>
                <GatsbyImage image={member.image} alt={member.name} imgStyle={{ borderRadius: '50%' }} style={{ width: '200px', height: '200px', marginBottom: '20px' }} />
                <Typography variant="body1" paragraph>
                    {member.description}
                </Typography>
                <Typography variant="h5" component="h3">
                    PRs:
                </Typography>
                <List sx={{ padding: 0 }}>
                    {member.prs.map((pr, index) => (
                        <ListItem key={index} sx={{ paddingTop: 0, paddingBottom: 0, paddingLeft: 0 }}>
                            <Typography variant="body1">
                                <span role="img" aria-label="check">✅</span> {pr}
                            </Typography>
                        </ListItem>
                    ))}
                </List>
                <Box sx={{ marginBottom: '20px' }} />
                <Typography variant="h5" component="h3" gutterBottom>
                    Other Accomplishments:
                </Typography>
                <List sx={{ padding: 0 }}>
                    {member.accomplishments.map((accomplishment, index) => (
                        <ListItem key={index} sx={{ paddingTop: 0, paddingBottom: 0, paddingLeft: 0 }}>
                            <Typography variant="body1">
                                <span role="img" aria-label="star">⭐</span> {accomplishment}
                            </Typography>
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Box>
    );
};

export default TeamLeaderCard;