import express, { json } from 'express';
import { google } from 'googleapis';

const app = express();
const PORT = process.env.PORT || 3000;

// Google Sheets API credentials
const auth = new google.auth.GoogleAuth({
  keyFile: 'test-project-416721-2793f35c89a6.json',
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});
const sheets = google.sheets({ version: 'v4', auth });

// Middleware to parse JSON bodies
app.use(json());

// Handle form submission
app.post('/submit/sheet1', async (req, res) => {
  try {
    const { email, reason, comments } = req.body;

    // Get current date and time
    const timestamp = new Date().toISOString();

    // Append data to Google Sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: '1tSs4Mil5vs9s3bvTla5dwzNbXRpynusLqK0kSgwVhdI',
      range: 'Unsubscribed!A:D',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[timestamp, email, reason, comments]],
      },
    });

    console.log('Data appended:', response.data);

    res.status(200).json({ success: true, message: 'Data stored successfully' });
  } catch (error) {
    console.error('Error storing data:', error);
    res.status(500).json({ success: false, message: 'Error storing data' });
  }
});

app.post('/submit/sheet2', async (req, res) => {
    // Handle form submission for Sheet2
    try {
        const { email, reason, comments } = req.body;
    
        // Get current date and time
        const timestamp = new Date().toISOString();
    
        // Append data to Google Sheet
        const response = await sheets.spreadsheets.values.append({
          spreadsheetId: '1tSs4Mil5vs9s3bvTla5dwzNbXRpynusLqK0kSgwVhdI',
          range: 'Sheet2!A:D',
          valueInputOption: 'USER_ENTERED',
          requestBody: {
            values: [[timestamp, email]],
          },
        });
    
        console.log('Data appended:', response.data);
    
        res.status(200).json({ success: true, message: 'Data stored successfully' });
      } catch (error) {
        console.error('Error storing data:', error);
        res.status(500).json({ success: false, message: 'Error storing data' });
      }
  });
  
  // Handle form submission for Sheet3
  app.post('/submit/sheet3', async (req, res) => {
    // Handle form submission for Sheet3
  });
  
  // Handle form submission for Sheet4
  app.post('/submit/sheet4', async (req, res) => {
    // Handle form submission for Sheet4
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
