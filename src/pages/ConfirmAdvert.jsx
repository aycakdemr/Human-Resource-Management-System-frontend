import React, { useEffect, useState } from "react";
import { NavbarBrand, Navbar } from "reactstrap";
import { NavLink } from "react-router-dom";
import { Table,Button} from "semantic-ui-react";
import JobAdvertisementService from '../services/jobAdvertisementService';
import ApprovedAdvertService from '../services/approvedAdvertsService';
import { useFormik } from "formik";



import {
    Badge,
    Card,
    CardBody,
    Container,
    Row
  } from "reactstrap";
export default function ConfirmAdvert() {

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
        <Navbar className="navbar-dark bg-primary rounded" expand="lg">
          <Container>
            <NavbarBrand>Onay Bekleyen İlanlar</NavbarBrand>
          </Container>
        </Navbar>
        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
              <Table.HeaderCell>İlan Başlığı</Table.HeaderCell>
              <Table.HeaderCell>Çalışma Şekli</Table.HeaderCell>
              <Table.HeaderCell>Pozisyon Seviyesi</Table.HeaderCell>
              <Table.HeaderCell>Şehir</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {jobadvertisements.map((advert) => (
              <Table.Row key={advert.id}>
                <Table.Cell>{advert.employer?.companyName}</Table.Cell>
                <Table.Cell>{advert.advertTitle}</Table.Cell>
                <Table.Cell>{advert.wayofworking?.name}</Table.Cell>
                <Table.Cell>{advert.positionLevel?.name}</Table.Cell>
                <Table.Cell>{advert.city?.cityName}</Table.Cell>
                <Table.Cell><Button
              
              color="purple"
              as={NavLink}
              to={`/confirmAdvertDetail/${advert.id}`}
            >
               Detay
            </Button></Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Container>
        </div>
    )
}
