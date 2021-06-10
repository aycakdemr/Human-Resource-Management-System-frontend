import React, { useEffect, useState } from "react";
import { Container, Table } from "semantic-ui-react";
import EmployerService from "../services/employerService";
import { NavbarBrand, Navbar } from "reactstrap";
export default function EmployerList() {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    let employersService = new EmployerService();
    employersService.getAll().then((result) => setEmployers(result.data.data));
  }, []);
  return (
    <div>
      <Container>
        <Navbar className="navbar-dark bg-primary rounded" expand="lg">
          <Container>
            <NavbarBrand>İş Verenler</NavbarBrand>
          </Container>
        </Navbar>
        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Şirket Adı</Table.HeaderCell>
              <Table.HeaderCell>Web Sitesi</Table.HeaderCell>
              <Table.HeaderCell>Telefon</Table.HeaderCell>
              <Table.HeaderCell>Sektör</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {employers.map((employer) => (
              <Table.Row key={employer.id}>
                <Table.Cell>{employer.companyName}</Table.Cell>
                <Table.Cell>{employer.webAddress}</Table.Cell>
                <Table.Cell>{employer.phoneNumber}</Table.Cell>
                <Table.Cell>{employer.companysector.name}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Container>
    </div>
  );
}
