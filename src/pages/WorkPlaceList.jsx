import React, { useEffect, useState } from "react";
import { Table } from "semantic-ui-react";
import WorkPlaceService from "../services/workPlaceService";

export default function WorkPlaceList() {

    const [workplaces, setWorkPlaces] = useState([]);

    useEffect(() => {
        let workPlaceService = new WorkPlaceService();
        workPlaceService.getAll().then((result) => setWorkPlaces(result.data.data));
      }, []);
    return (
        <div>
             <Table striped>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İş Yeri Adı</Table.HeaderCell>
            <Table.HeaderCell>Başlangıç Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Ayrılma Tarihi</Table.HeaderCell>
            <Table.HeaderCell>İş Arayan Adı</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {workplaces.map((workplace) => (
            <Table.Row key={workplace.id}>
              <Table.Cell>{workplace.workplace.workplaceName}</Table.Cell>
              <Table.Cell>{workplace.dateOfEntry}</Table.Cell>
              <Table.Cell>{workplace.dateOfLeaving}</Table.Cell>

              <Table.Cell>{workplace.jobseeker.firstName}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
        </div>
    )
}
