import * as React from 'react';
import { CircularProgress, Box } from '@mui/material';
import { fetchGoogleSheetCSVWithHeaderRow, fetchGoogleSheetCSV } from '../data/googleSheetFetcher';
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
        const [parsedMembers, results] = await Promise.all([
          fetchGoogleSheetCSVWithHeaderRow(spreadsheetId, sheetName, 1),
          fetchGoogleSheetCSV(spreadsheetId, 'Results')
        ]);
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth();
        const paidCol = `${currentYear} Membership Paid?`;
        const prevPaidCol = `${currentYear - 1} Membership Paid?`;
        const filteredMembers = parsedMembers.filter(member => {
          const paid = (member[paidCol] || '').toLowerCase();
          const prevPaid = (member[prevPaidCol] || '').toLowerCase();
          const isPaid = paid === 'yes' || paid === 'y' || paid === 'true' || paid === 'paid';
          const isPrevPaid = prevPaid === 'yes' || prevPaid === 'y' || prevPaid === 'true' || prevPaid === 'paid';
          if (currentMonth >= 5) {
            return isPaid;
          } else {
            return isPaid || isPrevPaid;
          }
        });
        const membersWithExtras = filteredMembers.map((member, index) => {
          const m = { ...member, id: index + 1 };
          m.displayName = m['Full Name'] || '';
          m.location = m['Location'] || '';
          // Find most recent results for this member
          const name = m.displayName.trim().toLowerCase();
          const memberResults = results.filter(r => {
            const rName = `${(r['First Name'] || '').trim()} ${(r['Last Name'] || '').trim()}`.trim().toLowerCase();
            return rName && name && rName === name;
          }).sort((a, b) => {
            const aDate = a['Race Date'] ? new Date(a['Race Date']) : null;
            const bDate = b['Race Date'] ? new Date(b['Race Date']) : null;
            if (!aDate || !bDate) return 0;
            return bDate - aDate;
          });
          const mostRecent = memberResults[0] || null;
          if (mostRecent) {
            m.RecentEvent = mostRecent['Event Name'] || '';
            m.RecentEventDistance = mostRecent['Event Distance'] || '';
            m.RecentEventTime = mostRecent['Result (HH:MM:SS.MS)'] || '';
          } else {
            m.RecentEvent = '';
            m.RecentEventDistance = '';
            m.RecentEventTime = '';
          }
          m.RecentEvents = memberResults.slice(0, 5).map(ev => ({
            event: ev['Event Name'] || '',
            distance: ev['Event Distance'] || '',
            time: ev['Result (HH:MM:SS.MS)'] || '',
            date: ev['Race Date'] || '',
            place: ev['Place (optional)'] || ''
          }));
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
  return (
    <MembersTable members={members} />
  );
};

export default Members;
