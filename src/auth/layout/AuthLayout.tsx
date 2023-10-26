import { Grid, Typography } from "@mui/material";
import React, { ReactNode } from "react";
interface AuthLayoutProps {
  children: ReactNode;
  title?: string;
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title = '' }) => {
  return (
    <Grid 
      container
      spacing={0}
      direction="column"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
    >
      <Grid 
        item
        className="box-shadow"
        xs={12}
        sx={{ width:{md:450},backgroundColor: 'white', padding: 3, borderRadius: 2, justifyContent: "center" }
        
    }
      >
        <Typography variant='h4' sx={{ mb: 1,textAlign: 'center' ,textTransform:'none' }}>{title}</Typography>
        {children}
      </Grid>
    </Grid>
  );
}