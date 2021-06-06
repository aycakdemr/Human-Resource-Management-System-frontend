import React, { useEffect, useState } from "react";
import { Icon, Label, Menu, Table } from "semantic-ui-react";
import JobSeekerService from '../services/jobSeekerService';

export default function JobSeekerList() {
    const [jobseekers, setJobSeekers] = useState([]);

    useEffect(() => {
        let jobseekerService = new JobSeekerService();
        jobseekerService
          .getJobSeekers()
          .then((result) => setJobSeekers(result.data.data))
          
      },[]);
    return (
        <div>
            <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İsim</Table.HeaderCell>
            <Table.HeaderCell>Soyisim</Table.HeaderCell>
            <Table.HeaderCell>Kimlik No</Table.HeaderCell>
            <Table.HeaderCell>Doğum yılı</Table.HeaderCell>
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

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
        </div>
    )
}
