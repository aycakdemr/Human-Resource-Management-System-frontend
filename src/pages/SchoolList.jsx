import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import SchoolService from '../services/schoolService';

export default function SchoolList() {

    const [schools, setSchools] = useState([]);

    useEffect(() => {
        let schoolService = new SchoolService();
        schoolService.getAll().then((result) => setSchools(result.data.data));
      }, []);
    return (
        <div>
             <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Bölüm Adı</Table.HeaderCell>
            <Table.HeaderCell>Okul Adı</Table.HeaderCell>
            <Table.HeaderCell>İş Arayan Adı</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {schools.map((school) => (
            <Table.Row key={school.id}>
              <Table.Cell>{school.schoolDepartment.department.departmentName}</Table.Cell>
              <Table.Cell>{school.schoolDepartment.school.schoolName}</Table.Cell>

              <Table.Cell>{school.jobseeker.firstName}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
        </div>
    )
}
