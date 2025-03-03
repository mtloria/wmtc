import { Box } from "@mui/material";
import * as React from "react";
import foundingMembers from "../images/founding-members.jpeg";
import { Typography, Card, CardMedia, CardContent } from "@mui/material";

const AboutTheTeamPage = () => {
    return (
        <Box sx={{ padding: 4, textAlign: "center" }}>
            <Typography variant="h2" gutterBottom sx={{ fontWeight: "bold", color: "#202a44" }}>
                About the Team
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", marginTop: 4 }}>
                <Card sx={{ maxWidth: 1000 }}>
                    <CardMedia
                        component="img"
                        alt="Founding Members"
                        height="auto"
                        image={foundingMembers}
                        title="Founding Members"
                        sx={{ width: "100%", objectFit: "contain" }}
                    />
                    <CardContent>
                        <Typography variant="body1" color="textSecondary" component="p">
                            (Left to Right) Jordan Kyle, Caleb Kerr, Jeremy Craven, and Tom Anderson. These four can be considered the founding members of WMTC, as they were the first group of members to participate in a team race at the 2020 Rock n' Roll Half Marathon in New Orleans. WMTC won the team race in the <a href="https://www.runningusa.org/industry-news/13000-runners-converge-in-the-big-easy-for-the-2020-humana-rock-n-roll-new-orleans-marathon-and-half/" target="_blank" rel="noopener noreferrer" style={{ color: "#1e88e5", textDecoration: "none", fontWeight: "bold" }}>Inaugural North American Distance Project Teams Competition!</a>
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    )
};

export default AboutTheTeamPage;