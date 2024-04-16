import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import styles from "./page.module.css";
import { Download } from "@mui/icons-material";
import Image from "next/image";

export default function Home() {
  return (
    <Box mt={5}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item md={6} >
            <Typography fontSize={"2em"} fontWeight={900}>
              Hellow!
            </Typography>
            <div className={styles.animated_text}>
              I'm a <span></span>
            </div>
            <Typography
            sx={{
              fontSize:"14px",
              p:1,
              fontFamily:"monospace"
            }}
            >
              Experienced on web development with around two years in React.js
              and Next.js . Proven track record of delivering top-notch
              solutions and collaborating effectively in diverse teams.
            </Typography>
            <Typography
            sx={{
              fontSize:"14px",
              p:1,
              fontFamily:"monospace"
            }}
            >
              Skilled in coding, debugging, and problem-solving to create
              innovative software products. Proficient in React Routing, Redux
              toolkit, Material-UI, React Hook form, React Bootstrap, React
              Query, Chakra-UI and other fronted Libraries
            </Typography>
            <Box
            sx={{
              display:"flex",
              m:"auto",
              justifyContent:'center',
              textAlign:"center",
              width:"80%",
              gap:2,
              mt:2
            }}
            >
              <Button variant="outlined" color="warning" sx={{color:"white"}}>View Skills</Button>
              <Button variant="contained" color="warning"><Download/> Download CV</Button>
            </Box>
          </Grid>
          <Grid item md={6}
          sx={{
            height:300,
            display:"flex",
            textAlign:"center",
            alignItems:"center",
            justifyContent:"center"
          }}
          >
            <Box width={'40%'} >
            <Image
            src={'data:image/jpeg;base64,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'}
            alt="brush Stroke"
            width={300}
            height={200}
            style={{
              width:"100%",
              objectFit:"cover",
              outline:"2px solid white",
              borderRadius:"50%"
            }}
            />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
