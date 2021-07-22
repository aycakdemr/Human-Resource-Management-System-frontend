import React, { useEffect, useState } from "react";
import { Table,Button } from "semantic-ui-react";
import SchoolService from '../../services/schoolService';
import UpdateSchool from "./UpdateSchool";
import NewSchool from "./NewSchool";

export default function SchoolList() {

    const [schools, setSchools] = useState([]);

    useEffect(() => {
        let schoolService = new SchoolService();
        schoolService.getSchoolsByJobSeekerId(7).then((result) => setSchools(result.data.data));
      }, []);
    return (
        <div>
             <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Bölüm Adı</Table.HeaderCell>
            <Table.HeaderCell>Okul Adı</Table.HeaderCell>
            <Table.HeaderCell>Başlangıç Yılı</Table.HeaderCell>
            <Table.HeaderCell>Mezuniyet Yılı</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {schools.map((school) => (
            <Table.Row key={school.id}>
              <Table.Cell>{school.department.departmentName}</Table.Cell>
              <Table.Cell>{school.school.schoolName}</Table.Cell>
              <Table.Cell>{school.dateOfEntry}</Table.Cell>
              <Table.Cell>{school.dateOfGraduation}</Table.Cell>
              <Table.Cell>
                <Button  size="mini" color="pink" type="submit" name="id" >
                  Sil
                </Button></Table.Cell>
                <Table.Cell><UpdateSchool id={school.id}/></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <NewSchool/>
        </div>
    )
}
