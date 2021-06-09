import React, { useEffect, useState } from "react";

import JobAdvertisementService from '../services/jobAdvertisementService';
import {
    Badge,
    Button,
    Card,
    CardBody,
    CardImg,
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
  } from "reactstrap";
export default function JobAdvertisementList() {
    const [jobadvertisements, setJobAdvertisements] = useState([]);

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService();
        jobAdvertisementService
          .getAll()
          .then((result) => setJobAdvertisements(result.data.data))
          
      },[]);
    return (
        <div>
          <Container>
              <Row className="justify-content-center">
              {jobadvertisements.map((jobadvertisement) => (
                
                  <Row className="row-grid">
                    
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                          {jobadvertisement.employer.companyName}
                          </h6>
                          <p >
                            Argon is a great free UI package based on Bootstrap
                            4 that includes the most important components and
                            features.
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                            {jobadvertisement.wayofworking.name}
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                            {jobadvertisement.positionLevel.name}
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                            {jobadvertisement.city.cityName}
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            İncele
                          </Button>
                          <Button
                            className="mt-4"
                            color="danger"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Yıldızla
                          </Button>
                        </CardBody>
                      </Card>
                   
                    
                    
              
                  <br></br>
                </Row>
                 ))}
              </Row>
              
            </Container>
        
        </div>
    )
}
