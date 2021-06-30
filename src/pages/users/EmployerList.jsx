import React, { useEffect, useState } from "react";
import { Container, Table,Button } from "semantic-ui-react";
import EmployerService from "../../services/employerService";
import { NavbarBrand, Navbar } from "reactstrap";
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";

export default function EmployerList() {
  const [confirmedemployers, setConfirmedEmployers] = useState([]);
  const [employers, setEmployers] = useState([]);
  console.log(confirmedemployers)
  useEffect(() => {
    let employersService = new EmployerService();
    employersService.getAllByEmployerCase().then((result) => setConfirmedEmployers(result.data.data));
     employersService.getAll().then((result) => setEmployers(result.data.data));
  }, []);
  return (
    <div>
      <Container>
        <Navbar className="navbar-dark bg-primary rounded" expand="lg">
          <Container>
            <NavbarBrand>İş Verenler(Onay Bekleyen)</NavbarBrand>
          </Container>
        </Navbar>
        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
              <Table.HeaderCell>Web Sitesi</Table.HeaderCell>
              <Table.HeaderCell>Telefon</Table.HeaderCell>
              <Table.HeaderCell>Sektör</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {confirmedemployers.map((employer) => (
              <Table.Row key={employer.id}>
                <Table.Cell>{employer.companyName}</Table.Cell>
                <Table.Cell>{employer.webAddress}</Table.Cell>
                <Table.Cell>{employer.phoneNumber}</Table.Cell>
                <Table.Cell>{employer.companysector.name}</Table.Cell>
                <Table.Cell><Button
                            className="mt-4"
                            color="primary"
                            as={NavLink}
                            to={`/employerdetail/${employer?.id}`}
                          >
                            
                            İncele
                          </Button></Table.Cell>
                          <Table.Cell><Button
                            className="mt-4"
                            color="orange"
                            as={NavLink}
                            to={`/employerdetailforadmin/${employer?.id}`}
                          >
                            
                            Onayla
                          </Button></Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>

        <Navbar className="navbar-dark bg-success rounded" expand="lg">
          <Container>
            <NavbarBrand>İş Verenler(Tümü)</NavbarBrand>
          </Container>
        </Navbar>
        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
              <Table.HeaderCell>Web Sitesi</Table.HeaderCell>
              <Table.HeaderCell>Telefon</Table.HeaderCell>
              <Table.HeaderCell>Sektör</Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
              <Table.HeaderCell></Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {employers.map((employer) => (
              <Table.Row key={employer.id}>
                <Table.Cell>{employer.companyName}</Table.Cell>
                <Table.Cell>{employer.webAddress}</Table.Cell>
                <Table.Cell>{employer.phoneNumber}</Table.Cell>
                <Table.Cell>{employer.companysector.name}</Table.Cell>
                <Table.Cell><Button
                            className="mt-4"
                            color="purple"
                            as={NavLink}
                            to={`/employerdetail/${employer?.id}`}
                          >
                            
                            İncele
                          </Button></Table.Cell>
                          <Table.Cell></Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Container>
    </div>
  );
}
