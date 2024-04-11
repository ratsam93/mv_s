import { google } from 'googleapis';

console.log("222")
const auth = new google.auth.GoogleAuth({
  keyFile: 'test-project-416721-2793f35c89a6.json',
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});
const sheets = google.sheets({ version: 'v4', auth });

console.log("33333")
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { timestamp, name, email, message } = req.body;
      console.log("44444")
      // const timestamp = new Date().toISOString();

      const response = await sheets.spreadsheets.values.append({
        spreadsheetId: '1tSs4Mil5vs9s3bvTla5dwzNbXRpynusLqK0kSgwVhdI',
        range: 'Contact_Navbar!A:A',
        valueInputOption: 'USER_ENTERED',
        requestBody: {
          values: [[timestamp, name, email, message]],
        },
      });

      console.log('Data appended:', response.data);

      res.status(200).json({ success: true, message: 'Data stored successfully' });
    } catch (error) {
      console.error('Error storing data:', error);
      res.status(500).json({ success: false, message: 'Error storing data' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}
