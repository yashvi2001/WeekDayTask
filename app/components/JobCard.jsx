// JobCard.js
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
const JobCard = () => {
  return (
    <Box>
        <Card>
          <CardContent>
            <Typography variant="body1" gutterBottom>
              ⏳ Posted 19 days ago
            </Typography>
            <div>
              <div className="info-container">
                <Typography variant="h5">
                  Endor
                </Typography>
                <Typography variant="h4" component="h2">
                  Backend Engineer
                </Typography>
                <Typography variant="subtitle1" className="cards-sub-text">
                  Bangalore
                </Typography>
              </div>
              <img src="https://storage.googleapis.com/weekday-assets/airtableAttachment_1713846224941_fab2j.jpg" alt="logo" />
            </div>
            <Typography variant="body2" className="card-salary">
              Estimated Salary: ₹20 - 40 LPA <span aria-label="Offered salary range">✅</span>
            </Typography>
            <div className="jd-link-container">
              <div className="hard-lang-container"></div>
            </div>
            <div>
              <Typography variant="body1">About Company:</Typography>
              <div>
                <Typography variant="body1"><strong>About us</strong></Typography>
                <Typography variant="body1">
                  80% of code in modern applications is code your developers didn’t write, but “borrowed” from the internet...
                </Typography>
                <Typography variant="body1"><strong>Founder/Recruiter profiles:</strong></Typography>
                <Typography variant="body1">
                  <a href="https://www.linkedin.com/in/vbadhwar/">Varun Badhwar</a>
                </Typography>
              </div>
              <Typography variant="body1">About Role:</Typography>
              <div>
                <Typography variant="body1"><strong>Overview</strong></Typography>
                <Typography variant="body1">
                  Company name: Endor Labs | HQ Location: Palo Alto, California | Website | LinkedIn
                </Typography>
                <ul>
                  <li>Salary: Rs. 20-40 lakhs per annum</li>
                  <li>Experience: 2+ years</li>
                  <li>Location: Bangalore</li>
                  <li>Type: Full-time</li>
                </ul>
              </div>
            </div>
            <div>
              <Button variant="contained" color="primary">View job</Button>
            </div>
            <div className="info-container poc-info-container">
              <Typography variant="h6" style={{ marginTop: '10px' }}>Minimum Experience</Typography>
              <Typography variant="h5">2 years</Typography>
            </div>
            <div className="status-container">
              <div>
                <Button variant="contained" color="primary">⚡ Easy Apply</Button>
              </div>
            </div>
          </CardContent>
        </Card>
    </Box>
  );
};

export default JobCard;
