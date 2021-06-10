import React, { useEffect, useState } from "react";
import { Button, Container, Image } from "semantic-ui-react";
import classnames from "classnames";
import JobAdvertisementService from "../services/jobAdvertisementService"
import {
  Card,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Row,
  Col
} from "reactstrap";
export default function JobAdvertisementFavList() {
 
  const [jobadvertisements, setJobAdvertisements] = useState([]);

  
  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService();
    jobAdvertisementService
      .getTwoAdvert()
      .then((result) => setJobAdvertisements(result.data.data))
      
  },[]);
  return (
    <div>
         <h3 className="h4 text-success font-weight-bold mb-4"></h3>
        <Row className="justify-content-center">
          <Col lg="6">
           
            <div className="nav-wrapper">
              <Nav
                className="nav-fill flex-column flex-md-row"
                id="tabs-icons-text"
                pills
                role="tablist"
              >
                <NavItem>
                  <NavLink
                   
                    className={classnames("mb-sm-3 mb-md-0", {
                     // active: this.state.iconTabs === 1
                    })}
                    onClick={e => this.toggleNavs(e, "iconTabs", 1)}
                    href="#pablo"
                    role="tab"
                  >
                    <i className="ni ni-cloud-upload-96 mr-2" />
                    Öne Çıkan İlanlar
                  </NavLink>
                </NavItem>
                
              </Nav>
            </div>
            {jobadvertisements.map((jobadvertisement) => (
            <Card className="shadow">
            <br></br>
              <CardBody>
              <h1>{jobadvertisement.employer.companyName}</h1>
                  <TabPane tabId="iconTabs1">
                    
                    <label>Pozisyon Adı : </label>
                <strong>{jobadvertisement.jobPosition.name}{" "}</strong><br></br>
                <label>Çalışma Şekli : </label>
               <strong>{jobadvertisement.wayofworking.name}{" "}</strong><br></br>
               <label>Pozisyon Seviyesi : </label>
              <strong>{jobadvertisement.positionLevel.name}{" "}</strong><br></br>
              <label>Konum : </label>
                <strong>{jobadvertisement.city.cityName}{" "}</strong><br></br>
                <label>Maaş Aralığı : </label>
                <strong>{jobadvertisement.minSalary}{" "}</strong>
                <strong>{jobadvertisement.maxSalary}{" "}</strong><br></br>
                  </TabPane>

                
              </CardBody>
              <br></br>
              <Container>
              <Button
                        className="btn-icon mb-3 mb-sm-0"
                        color="github"
                        href="https://github.com/aycakdemr/Human-Resource-Management-System-frontend"
                        size="lg"
                        target="_blank"
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-github" />
                        </span>
                        <span className="btn-inner--text">
                          <span className="text-warning mr-1">İncele</span>
                          
                        </span>
                      </Button>
                      <Button
                        className="btn-icon mb-3 mb-sm-0"
                        color="github"
                        href="https://github.com/aycakdemr/Human-Resource-Management-System-frontend"
                        size="lg"
                        target="_blank"
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-github" />
                        </span>
                        <span className="btn-inner--text">
                          <span className="text-warning mr-1"></span>
                          Kaydet
                        </span>
                      </Button>
              </Container>
              <br></br>
            </Card>
            
            ))}
          </Col>
          
        </Row>
       
    </div>
  );
}
