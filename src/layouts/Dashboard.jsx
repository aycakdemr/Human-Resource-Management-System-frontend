import React from "react";
import { Grid, Button, Container } from "semantic-ui-react";
import CompanySector from "./adverts/CompanySector";
import EducationLevel from "./adverts/EducationLevel";
import JobPositions from "./adverts/JobPositions";
import PositionLevels from "./adverts/PositionLevels";
import WayOfWorkings from "./adverts/WayOfWorkings";
import { Menu } from "semantic-ui-react";
import JobAdvertisementList from "../pages/adverts/JobAdvertisementList";
import { NavLink } from "react-router-dom";
import { ToastContainer } from 'react-toastify'

export default function Dashboard() {
  return (
    <Container>
      <ToastContainer position="bottom-right"/>
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <br></br>
            <Menu vertical>
              <Menu.Item>
                <Menu.Header>İş Pozisyonları</Menu.Header>

                <Menu.Menu>
                  <JobPositions />
                </Menu.Menu>
              </Menu.Item>

              <Menu.Item>
                <Menu.Header>Şirket Sektörü</Menu.Header>

                <Menu.Menu>
                  <CompanySector />
                </Menu.Menu>
              </Menu.Item>

              <Menu.Item>
                <Menu.Header>Çalışma Şekli</Menu.Header>

                <Menu.Menu>
                  <WayOfWorkings />
                </Menu.Menu>
              </Menu.Item>

              <Menu.Item>
                <Menu.Header>Pozisyon Seviyesi</Menu.Header>

                <Menu.Menu>
                  <PositionLevels />
                </Menu.Menu>
              </Menu.Item>

              <Menu.Item>
                <Menu.Header>Eğitim Seviyesi</Menu.Header>

                <Menu.Menu>
                  <EducationLevel />
                </Menu.Menu>
              </Menu.Item>
              <br></br>
              <Button primary>Filtrele</Button>
            </Menu>
            <Button
              className="mt-4"
              color="orange"
              as={NavLink}
              to="/newadvert"
            >
              Yeni İlan Ekle
            </Button>
            <Button
              className="mt-4"
              color="purple"
              as={NavLink}
              to="/confirmAdvert"
            >
              İlan Onayla
            </Button>
          </Grid.Column>

          <Grid.Column width={13}>
            <br></br>
            <br></br>
            <JobAdvertisementList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}
