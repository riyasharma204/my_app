import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CachedIcon from '@mui/icons-material/Cached';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import BookIcon from '@mui/icons-material/Book';
import { Link} from "react-router-dom";
import {Card, CardMedia} from '@mui/material';

const drawerWidth = 300;

export default function PermanentDrawerLeft() {
    
  return (
    <Box sx={{ display: 'flex',bgcolor: '#d7a8df',width: "100%", mt:6}}>   
      {/* <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
        }}
        variant="permanent"
        anchor="left"
      >
        {/*} <List>
          {['Inbox', 'Starred', 'Send email'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
          </List>
          <Typography variant="h5" sx={{mt:2, color:"purple",mb:2}}>BLOG SECTION</Typography>
          <Divider/>
         <Stack spacing={1} direction="row" sx={{mt: 4,mb:4}}> 
            <Button>Add</Button>
            <Button>Content</Button>
            <Button>Theme</Button>
        </Stack>
        <Divider/>
        <List>
          {['Blog Content', 'Page Header', 'Reload posts listing','Page Footer'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <BookIcon /> : <CachedIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
          </List>
      </Drawer>
      */}
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3 }}
      >
        <Typography variant="h4" sx={{mb:2, color:"white"}}>BLOG TITLE</Typography>
        <Grid container spacing={2}>
             <Grid item xs={12} md={12}>
             <Card
                raised
                sx={{
                  height: 70 + "vh",
                  width: "100%",
                  borderRadius: 6,
                }}
              >
                <CardMedia>
                    <img
                      src="https://t3.ftcdn.net/jpg/03/22/26/78/360_F_322267858_tBoqMezDzD1DQpYYinFv9nXQ2dFQhQ9Q.jpg"
                      style={{height:"100%",width:"100%",objectFit:"cover"}}
                    />
                </CardMedia>
             </Card>
             </Grid>
        </Grid>
        <Typography paragraph sx={{color:"white",mt:2}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo.  
        </Typography>
        
      </Box>
    </Box>
    
  );
}