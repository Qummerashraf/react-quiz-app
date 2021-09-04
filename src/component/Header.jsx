import { Box, Container, Grid } from "@material-ui/core";
import React from "react";
import "..//index.css";

function Header() {
  return (
    <>
      <Box>
        <Container>
          <Grid container>
            <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
              <div className="head">
                <h1>Simple Quiz App</h1>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Header;
