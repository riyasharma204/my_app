import React from 'react'
import {
     Grid,
     Card,
     CardMedia,Typography,
     Button
  } from "@mui/material";
  import { useNavigate } from "react-router-dom";

function Aboutus() {
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/Appbar');
    }
  return (
    <React.Fragment>
         <Grid
          container
          spacing={3}
          sx={{ mt: 10, maxWidth: "100%", height: "100%",direction:"column"}}
        > 
         <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
            <Card
                raised
                sx={{
                  height: 70 + "vh",
                  width: "100%",
                  borderRadius: 6,
                  backgroundColor:"#e1bee7"
                }}
              >
                <Typography variant="h4" sx={{mt:2, color:"#906697",mb:2, margin:5}}>ABOUT US</Typography>
                <Typography sx={{mt:2, color:"#906697",mb:2, margin:5}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus quibusdam omnis, odio, hic voluptates harum fugiat numquam eius quo ipsam rerum nisi vel illum! Repellendus asperiores doloribus nulla expedita quia?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, recusandae. Earum corporis placeat sit odio magnam libero quae, eveniet autem fugiat saepe consequuntur quia quod repellat omnis. Accusamus, repellendus laborum?
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi sed unde dolorem maxime rerum nobis assumenda corrupti, delectus aut nulla. Possimus fugit numquam necessitatibus velit corrupti eveniet ducimus reiciendis quisquam.
                </Typography>
                 
                <Button variant="contained"  sx={{ flexGrow: 0, mt:2, bgcolor:"#906697",mb:2, margin:5}} onClick={handleSubmit}>
                   GO To HOME PAGE
                </Button>
                </Card>
            </Grid>
            <Grid item xs={12} md={4}>
            <Card
                raised
                sx={{
                  height: 50 + "vh",
                  width: "100%",
                  borderRadius: 6,
                }}
              >
                <CardMedia>
                    <img 
                      src="https://st4.depositphotos.com/1842549/21442/i/450/depositphotos_214427446-stock-photo-icon-internet-button-white-background.jpg"
                      style={{height:"100%", width:"100%", objectFit:"cover", display:'flex'}}
                    />
                </CardMedia>
                </Card>
            </Grid>
            </Grid>
        </Grid> 
        
    </React.Fragment>
  )
}

export default Aboutus
