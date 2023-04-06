import React, { useEffect, useState } from "react";
import * as BS from "react-bootstrap";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useLocation } from "react-router-dom";

const Stock = () => {
  const location = useLocation();
console.log("loc", location)


  return (
    <BS.Container>
      <div>
        <Box sx={{ pt: 20, pb: 10, display: "flex", justifyContent: "center" }}>
          <Typography component="h1" variant="h2">
            <div
              className="fontbold"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              Meet the team
            </div>
          </Typography>
        </Box>
        <Box
          sx={{
            pt: 5,
            pb: 20,
            display: "flex",
            justifyContent: "center",
            borderRadius: "15px",
          }}
        >
          <div>
            <div>
              <Container sx={{ mt: 5, mb: 10, justifyContent: "center" }}>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <BS.Row>
                    <BS.Col lg={6} md={7} sm={8} xs={10}>
                      <div data-aos="fade-right" data-aos-duration="1000">
                        <img src="/cbsoverhead.webp" width="400" height="300" />{" "}
                      </div>
                      <Box sx={{ mb: 10 }}></Box>
                    </BS.Col>
                    <br />
                    <BS.Col lg={6} md={7} sm={8} xs={10}>
                      <Typography align="right">
                        <h2 className="font">
                          <div data-aos="fade-left" data-aos-duration="1000">
                            Haas '24 and Ben '24 are two Columbia EMBA students
                            dedicated to finding useful and relevant information
                            for Columbia Business School students.
                            <br />
                            <br />
                            Our mission is to aggregate and link to CBS events
                            in one convenient place. This includes speakers,
                            club events, as well as school run activities, along
                            witht the occasional non CBS event.
                          </div>
                        </h2>
                      </Typography>
                    </BS.Col>
                  </BS.Row>
                  <br />
                  <br />
                  <br />
                </Box>
              </Container>
            </div>
          </div>
        </Box>
      </div>
    </BS.Container>
  );
};

export default Stock;
