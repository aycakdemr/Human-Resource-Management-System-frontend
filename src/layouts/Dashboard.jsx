import React from 'react'
import { Grid ,Button, Container} from 'semantic-ui-react'
import Cities from './Cities'
import CompanySector from './CompanySector'
import EducationLevel from './EducationLevel'
import JobPositions from './JobPositions'
import PositionLevels from './PositionLevels'
import WayOfWorkings from './WayOfWorkings'
import { Menu } from 'semantic-ui-react'
import JobAdvertisementList from '../pages/JobAdvertisementList'

export default function Dashboard() {
    return (
        <Container>
        <Grid >
                <Grid.Row >
                    <Grid.Column width={3}>
        <Menu vertical>
        <Menu.Item>
          <Menu.Header>İş Pozisyonları</Menu.Header>

          <Menu.Menu>
            <JobPositions/>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Şirket Sektörü</Menu.Header>

          <Menu.Menu>
            <CompanySector/>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Çalışma Şekli</Menu.Header>

          <Menu.Menu>
          <WayOfWorkings/>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Pozisyon Seviyesi</Menu.Header>

          <Menu.Menu>
          <PositionLevels/>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Eğitim Seviyesi</Menu.Header>

          <Menu.Menu>
          <EducationLevel/>
          </Menu.Menu>
        </Menu.Item>
        <br></br>
        <Button primary>Filtrele</Button>          
      </Menu>
      </Grid.Column>
      
            
      <Grid.Column width={13}>
                       <br></br>
                       <br></br>
                        <JobAdvertisementList/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </Container>
    )
}
