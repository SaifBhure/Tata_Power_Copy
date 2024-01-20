
import * as React from 'react';
import { Card, Typography } from '@mui/material';
import DateComponent from '../../Data/DatePIcker';
import LineChart from '../../Components/LineChart';
import ResultTable from './ResultTable';

const Pastresult = () => {
  return (
    <div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginBottom: '40px',
              gap: '5px',
            }}
          >
              <Card sx={{
                  backgroundColor: '#F3C69933',
                  display: 'flex',
                  flexDirection: 'column',  
                  borderRadius: '20px',
                  width: '430px',
                  justifyContent: 'center',
                  alignItems: 'center',  
                  marginLeft: '260px',
                  boxShadow: '4',
                  marginTop: '0px',
                  outlineOffset: '-1px',
                  position: 'relative',
                  top: 0,
                  zIndex: 1000,
                  height: '350px',
                }}>
                  <Typography
                    display="flex"
                    variant="h2"
                    style={{ marginLeft: '100px', fontSize: '25px', fontWeight: 'bold', marginTop: '90px' }}
                  >
                    Load
                    <Card
                      sx={{
                        width: '6%',
                        marginLeft: '170px',
                        borderRadius: '10px',
                        marginTop: '0px',
                        backgroundColor: '#F4F4F4',
                        justifyContent: 'center',
                        height: '8%',
                      }}
                    ></Card>
                  </Typography>
                  <LineChart />
                </Card>
              <Card sx={{ display: 'flex',
                  flexDirection: 'column',  
                  borderRadius: '20px',
                  width: '430px',
                  justifyContent: 'center',
                  alignItems: 'center',  
                  marginLeft: '260px',
                  boxShadow: '4',
                  marginTop: '0px',
                  outlineOffset: '-1px',
                  position: 'relative',
                  top: 0,
                  zIndex: 1000,
                  height: '350px',

                backgroundColor: '#F3C69933'
                 }}>
                <Typography
                  display="flex"
                  variant="h2"
                  style={{ marginLeft: '100px', fontSize: '25px', fontWeight: 'bold', marginTop: '90px' }}
                >
                  Temperature
                  <Card
                    sx={{
                      width: '6%',
                      marginLeft: '170px',
                      borderRadius: '10px',
                      marginTop: '0px',
                      backgroundColor: '#F4F4F4',
                      justifyContent: 'center',
                      height: '8%',
                    }}
                  ></Card>
                </Typography>
                <LineChart />
              </Card>
              <Card sx={{ display: 'flex',
                  flexDirection: 'column',  
                  borderRadius: '20px',
                  width: '430px',
                  justifyContent: 'center',
                  alignItems: 'center',  
                  marginLeft: '260px',
                  boxShadow: '4',
                  marginTop: '0px',
                  outlineOffset: '-1px',
                  position: 'relative',
                  top: 0,
                  zIndex: 1000,
                  height: '350px',
                   backgroundColor: '#CAC7F233' }}>
                <Typography
                  display="flex"
                  variant="h2"
                  style={{ marginLeft: '100px', fontSize: '25px', fontWeight: 'bold', marginTop: '90px' }}
                >
                  Humidity
                  <Card
                    sx={{
                      width: '7%',
                      marginLeft: '150px',
                      borderRadius: '10px',
                      marginTop: '6px',
                      backgroundColor: '#F4F4F4',
                      justifyContent: 'center',
                      height: '8%',
                    }}
                  ></Card>
                </Typography>
                <LineChart />
              </Card>
            </div>

            <Card
              sx={{
                display: 'flex',
                flexDirection: 'row',
                borderRadius: '20px',
                width: '80%',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginLeft: '260px',
                boxShadow: '4',
                marginTop: '120px',
                outlineOffset: '-1px',
                position: 'fixed',
                top: 0,
                zIndex: 1000,
                height: '80px',
              }}
            >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            sx={{
              marginTop: '5px',
              fontSize: '24px',
              fontWeight: 'bold',
              marginLeft: '25px',
            }}
          >
            Previous Results
          </Typography>
          <div>
            <DateComponent />
          </div>
        </div>
      </Card>

      <ResultTable />
    </div>
  );
};

export default Pastresult;
