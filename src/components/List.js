import { Box } from "@mui/material";

function List({customer}) {
    
    return (
      <Box sx={{ display: 'flex',bgcolor: '#d7a8df',width: "30%", mt:6}}>{customer.name}, {customer.age} </Box>);
      
    }

export default List;