import React from 'react';
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

function Footer() {
  return (
     <React.Fragment>
        <Box component="footer"
        sx={{
        backgroundColor: "purple",
        p: 6
      }}> 
        <Container maxWidth='lg'>
            <Grid container spacing={5}>
               <Grid item xs={12} md={4}>
                 <Typography variant="h6" color="white" gutterBottom>About Us</Typography>
                 <Typography variant="body2" color="white">
                  We provide the best service to our
                   customers.
                </Typography>
               </Grid>
               <Grid item xs={12} md={4}>
                 <Typography variant="h6" color="white" gutterBottom>Conatct Us</Typography>
                 <Typography variant="body2" color="white">
                  Sunfox Technologies, Nehru Colony
                </Typography>
                <Typography variant="body2" color="white">
                  Email: Sunfox@gamil.com
                </Typography>
                <Typography variant="body2" color="white">
                 Phone: +1 456 789 1234
                </Typography>
               </Grid>
               <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="white" gutterBottom>
              Follow Us
            </Typography>
            <Link href="https://www.facebook.com/" color="#ffebee">
              <Facebook />
            </Link>
            <Link
              href="https://www.instagram.com/"
              color="#ffebee"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="https://www.twitter.com/" color="#ffebee">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="white" align="center">
            {"Copyright © "}
            <Link color="inherit">
              Our Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
          </Box>
        </Container>
        </Box>
     </React.Fragment>
  )
}

export default Footer
