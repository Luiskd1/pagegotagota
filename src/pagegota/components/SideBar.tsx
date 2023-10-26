import { TurnedInNot } from '@mui/icons-material';
import { Box, Drawer, Toolbar, Typography, Divider, List, ListItem, ListItemButton, ListItemIcon, Grid, ListItemText } from '@mui/material';


export const SideBar = ({drawerWidth = 240}) => {
  return (
    
    <Box
        component={'nav'}
        sx={{width:{sm:drawerWidth}, flexShrink:{sm:0}}}
    >
        <Drawer
        variant="permanent"
        open={true}
        sx={{display:{xs:'block'},
        '& .MuiDrawer-paper':{boxSizing:'border-box',width:drawerWidth}}
      }
        >

          <Toolbar>

            <Typography variant='h6' noWrap component={'div'}>Luis Santana </Typography>
            
          </Toolbar>
          <Divider/>
        
        <List>
          {
            ['julio','luis', 'maldonado', 'pablo'].map(text => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot/>
                  </ListItemIcon>
                  <Grid container>
                    <ListItemText primary={text}/>
                    <ListItemText secondary={'Lorem ipsum dolor, sit amet consectetur adipisicing elit.  '}/>
                    
                  </Grid>
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>
        </Drawer>
    </Box>
  )
}
