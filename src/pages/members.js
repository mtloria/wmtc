import * as React from 'react';
import { CircularProgress, Box } from '@mui/material';
import { fetchGoogleSheetCSVWithHeaderRow } from '../data/googleSheetFetcher';
import MembersTable from '../components/members-table';

const spreadsheetId = '138hvDGLQMJmggHGqWQr_E29276fiE29VS0OQflFsgMk';
const sheetName = 'Memberships';

const Members = () => {
  const [members, setMembers] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    const fetchMembers = async () => {
      setLoading(true);
      setError(null);
      try {
        const parsedMembers = await fetchGoogleSheetCSVWithHeaderRow(spreadsheetId, sheetName, 1);
        const prColumns = [
          '50 Mile',
          '50K',
          'Marathon',
          'Half Marathon',
          '10K',
          '5K',
          '1500m',
          '800m',
        ];
        const membersWithExtras = parsedMembers.map((member, index) => {
          const m = { ...member, id: index + 1 };
          m.displayName = m['Full Name'] || '';
          m.jobTitle = m['Occupation'] || m.jobTitle || '';
          m.location = m['Location'] || '';
          let foundPR = false;
          for (const col of prColumns) {
            const val = (member[col] || '').trim();
            if (val && val.toLowerCase() !== 'n/a') {
              m.PRDistance = col;
              m.PRTime = val;
              foundPR = true;
              break;
            }
          }
          if (!foundPR) {
            m.PRDistance = '';
            m.PRTime = '';
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
