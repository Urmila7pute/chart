import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Layout from '../Sidebar';


export default function InProgressPage() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Layout/>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === 'light'
              ? theme.palette.backgroundColorMain.backgroundColor
              : theme.palette.backgroundColorMain.backgroundColor,
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          Page Inprogress
        </Container>
      </Box>
    </Box>
  );
}