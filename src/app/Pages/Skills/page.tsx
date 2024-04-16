"use client";
import React from "react";
import {
  Box,
  Grid,
  Pagination,
  Stack,
  Typography,
} from "@mui/material";
import { SKILLS } from "@/constant/content";
import Image from "next/image";




const UserShowOnPage = 4;
const Skills = () => {
  const [user, setUser] = React.useState(1);
  const handleChange = (e: any, data: any) => {
    setUser(data);
  };
  const members = user * UserShowOnPage;
  const remainingMembers = members - UserShowOnPage;

  return (
    <div>
      <Typography
        sx={{
          fontSize: "3em",
          fontWeight: 900,
          textAlign: "center",
          p: 2,
          color: "orange",
          textShadow: "2px 2px black",
        }}
      >
        SKILLS!
      </Typography>
      <Box>
        <Grid container spacing={3}>
          {SKILLS.slice(remainingMembers, members).map((skill,i) => (
            <Grid item md={3} key={skill.id}>
              <Box
                sx={{
                  p: 4,
                  background: "rgba(0,0,0,0.4)",
                  borderRadius: 2,
                  outline: "1px solid rgba(160,160,160,.7)",
                }}
              >
                <Box 
                 sx={{
                  textAlign:"center",
                 }}
                >
                <Image
                src={skill.icons}
                alt={'icons'}
                width={100}
                height={100}
                style={{
                  borderRadius:"50%",
                  filter:"brightness(80 %)"
                }}
                />
                </Box>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: { md: "2em" },
                  }}
                >
                  {skill.title}
                </Typography>
                <Typography>{skill.description}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Stack spacing={2} sx={{ mt: 1 }}>
          <Pagination
            sx={{
              ".MuiPaginationItem-root": {
                bgcolor: "white",
                "&.Mui-selected": {
                  bgcolor: "orange",
                  color: "black",
                  "&:hover": { bgcolor: "rgb(10%, 10%, 40%)", color: "white" },
                },

                "&:hover": { bgcolor: "purple", color: "white" },
              },
              "& > .MuiPagination-ul": {
                justifyContent: "center",
              },
            }}
            count={Math.ceil(SKILLS.length / UserShowOnPage)}
            page={user}
            onChange={handleChange}
            variant="outlined"
            // shape="rounded"
          />
        </Stack>
      </Box>
    </div>
  );
};

export default Skills;
