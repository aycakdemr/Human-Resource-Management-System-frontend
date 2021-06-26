import React from "react";
import { Grid,  Container } from "semantic-ui-react";
import JobAdvertisementList from "../../pages/adverts/JobAdvertisementList";
import { ToastContainer } from "react-toastify";
import { Route } from "react-router-dom";

import LayoutForFilter from "./LayoutForFilter";
import AdvertsByFilter from "../../pages/adverts/AdvertsByFilter";

export default function DashboardForAdverts() {
  
  return (
    <Container>
      <ToastContainer position="bottom-right" />
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <br></br>
            <LayoutForFilter/>
          </Grid.Column>

          <Grid.Column width={13}>
            <br></br>
            <br></br>
            <JobAdvertisementList/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}
