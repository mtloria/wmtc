import * as React from 'react';
import { CircularProgress, Box } from '@mui/material';
import { fetchGoogleSheetCSV } from '../data/googleSheetFetcher';
import MembersTable from '../components/members-table';

const spreadsheetId = '1kG8qHF1NhJqjj07D30F4vhPDohi3KBDQkQZEX02tdWI';
const sheetName = 'members';

const Members = () => {
  const [members, setMembers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchMembers = async () => {
      setLoading(true);
      setError(null);
      try {
        const parsedMembers = await fetchGoogleSheetCSV(spreadsheetId, sheetName);
        const membersWithExtras = parsedMembers.map((member, index) => {
          const m = { ...member, id: index + 1 };
          if (m.firstName && m.lastName) {
            m.name = `${m.firstName} ${m.lastName}`;
          }
          if (m.locationCity || m.locationState) {
            const city = m.locationCity || '';
            const state = m.locationState || '';
            m.location = city + (city && state ? ', ' : '') + state;
          } else {
            m.location = '';
          }
          return m;
        });
        setMembers(membersWithExtras);
      } catch (e) {
        setError('Failed to load member data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchMembers();
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', p: 3 }}>
        <CircularProgress />
      </Box>
    );
  }
  if (error) {
    return (
      <Box sx={{ p: 3, textAlign: 'center', color: 'error.main' }}>
        {error}
      </Box>
    );
  }
  return <MembersTable members={members} />;
};

export default Members;
