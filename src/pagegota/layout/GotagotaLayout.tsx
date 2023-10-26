import React, { ReactNode } from 'react';
import { Box, Toolbar } from '@mui/material';
import { NavBar, SideBar } from '../components';

interface GotagotaLayoutProps {
  children: ReactNode;
}
const drawerWidth =240;

export const GotagotaLayout: React.FC<GotagotaLayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <NavBar drawerWidth={drawerWidth}/>

      <SideBar drawerWidth={drawerWidth} />  

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
       

      <Toolbar/>
      {children}
      </Box>

    </Box>
  );
};