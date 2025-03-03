import * as React from 'react';
import NavBar from '../components/navbar';

const MeetTheTeamPage = () => {
    React.useEffect(() => {
        // Handle page reload quirks
        document.body.style.margin = '0';
        document.body.style.padding = '0';
        document.title = 'Meet the Team | WMTC';
    }, []);

    return (
        <><NavBar /><div>
            <h1>Meet the Team</h1>
            <p>Insert team members here.</p>
        </div></>  
    )
}

export default MeetTheTeamPage;