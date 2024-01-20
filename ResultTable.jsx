import React from 'react';
import {
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';

const rows = [
// Add data accordingly
];

const ResultTable = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column', 
        borderRadius: '20px',
        width: '80%', 
        marginLeft: '260px',
        boxShadow: '4',
        marginTop: '0px',
        outlineOffset: '-1px',
        position: 'relative'
      }}
    >
      <CardContent
        sx={{
          overflowY: 'auto',
          flex: 1, 
        }}
      >
        <TableContainer component={Paper}>
          <Table>
            <TableHead
              sx={{
                backgroundColor: '#B4B4B4',
                color: 'white',
              }}
            >
              <TableRow>
                <TableCell>Time</TableCell>
                <TableCell>Predicted Load</TableCell>
                <TableCell>Actual Load</TableCell>
                <TableCell>Predicted Temp</TableCell>
                <TableCell>Actual Temp</TableCell>
                <TableCell>Predicted Hudmidity</TableCell>
                <TableCell>Actual Hudmidity</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.Time}>
                  <TableCell>{row.PredictedLoad}</TableCell>
                  <TableCell>{row.ActualLoad}</TableCell>
                  <TableCell>{row.PredictedTemp}</TableCell>
                  <TableCell>{row.ActualTemp}</TableCell>
                  <TableCell>{row.PredictedHudmidity}</TableCell>
                  <TableCell>{row.ActualHudmidity}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </div>
  );
};

export default ResultTable;
