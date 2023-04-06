import React, { useRef } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { Parallax, Background } from "react-parallax";
import Carousel from "react-elastic-carousel";
import Aos from "aos";

const Carousely = () => {
  // const carouselRef = useRef(null);
  // let resetTimeout;
  return (
    <Container sx={{ pt: 10 }}>
      <Typography
        component={"span"}
        variant="h5"
        sx={{
          pt: 10,
          pl: 10,

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="fontbold"
        >
          Did we miss an event? Interested in getting your event on the site?
          Email us at Events@cbshappenings.com
        </div>
        {/* </Typography> */}
      </Typography>
      <Box
        sx={{
          pb: 10,
          pl: 10,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <div data-aos="flip-down" data-aos-duration="1000" className="fontbold">
          <img src="/5star.png" alt="one" width="300" height="225" />
        </div>
      </Box>
    </Container>
  );
};
export default Carousely;
