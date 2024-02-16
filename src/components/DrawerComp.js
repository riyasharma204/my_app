// import React from "react";
// import {
//   Box,
//   List,
//   ListItemText,
//   ListItem,
//   ListItemIcon,
//   ListItemButton,
//   Divider,
  
// } from "@mui/material";
// import { Drawer, DialogTitle, ModalClose } from "@mui/joy";
// import MenuIcon from "@mui/icons-material/Menu";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";
// import { BarChart } from '@mui/x-charts/BarChart';
// import { LineChart } from '@mui/x-charts/LineChart';
// import Grid from "@mui/material/Grid";
// import { Link,useNavigate } from "react-router-dom";
// import "../App.css";

// function DrawerComp() {
//   const [open, setOpen] = React.useState(false);
//   const navigate = useNavigate();
//   return (
//     <React.Fragment>
//       {/*<IconButton
//         size="large"
//         edge="start"
//         color="inherit"
//         aria-label="menu"
//         sx={{ mr: 2}}
//       >
//       <MenuIcon />
// </IconButton>*/}
       
//         <Drawer
//           opem = {open}
//           onClose ={()=> setOpen(false)}
//           PaperProps={{ sx: { backgroundColor: "#fff", width: "250px" } }}
//         >
//           <ModalClose />
         
//           <Box sx={{ backgroundColor: "purple", color:'white', height:'100vh' }}>
//           <DialogTitle sx={{margin:'10px'}}>DASHBOARD</DialogTitle>
//             <List>
//               {["Home", "Blog", "Aboutus", "Contactus"].map(
//                 (text, index) => (
//                   <ListItem key={text} disablePadding>
//                     <ListItemButton>
//                       <ListItemIcon>
//                         {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//                       </ListItemIcon>
//                       <ListItemText primary={text} />
//                     </ListItemButton>
//                   </ListItem>
//                 )
//               )}
//             </List>
//           </Box>
//         </Drawer>
      
//       </React.Fragment>    
//   )
// }

// export default DrawerComp
