import React, { useEffect, useState } from "react";
import { Container,  Table } from "semantic-ui-react";
import JobSeekerService from "../../services/jobSeekerService";
import { NavbarBrand, Navbar } from "reactstrap";

export default function JobSeekerList() {
  const [jobseekers, setJobSeekers] = useState([]);

  useEffect(() => {
    let jobseekerService = new JobSeekerService();
    jobseekerService.getAll().then((result) => setJobSeekers(result.data.data));
  }, []);
  return (
    <div>
      <Container>
      <Navbar className="navbar-dark bg-primary rounded" expand="lg">
          <Container>
            <NavbarBrand>İş Arayanlar</NavbarBrand>
          </Container>
        </Navbar>
      <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Date Joined</Table.HeaderCell>
            <Table.HeaderCell>E-mail</Table.HeaderCell>
            <Table.HeaderCell>Called</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobseekers.map((jobseeker) => (
            <Table.Row key={jobseeker.id}>
              <Table.Cell>{jobseeker.firstName}</Table.Cell>
              <Table.Cell>{jobseeker.lastName}</Table.Cell>
              <Table.Cell>{jobseeker.identityNumber}</Table.Cell>
              <Table.Cell>{jobseeker.birthYear}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      </Container>
    </div>
  );
}
